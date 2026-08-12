#!/usr/bin/env node
/**
 * Build for the production domain and publish to the VPS.
 *
 * The server keeps its own copy of the files and does not pull from GitHub, so
 * publishing is a separate act from pushing. This script is the whole of it:
 *
 *   npm run deploy
 *
 * Three details it exists to get right:
 *
 * 1. BASE_PATH is set here, in the process environment, rather than on a shell
 *    command line. Git Bash rewrites a bare "/" into "/C:/Program Files/Git/"
 *    through MSYS path conversion, which produces a build where every asset
 *    URL is wrong and every stylesheet 404s — silently, since the build itself
 *    succeeds. Setting it in Node sidesteps the shell entirely.
 *
 * 2. Files are uploaded to a staging directory and swapped in, so a half-
 *    finished upload is never the live site, and files deleted from the build
 *    do not linger on the server.
 *
 * 3. It refuses to publish a build that does not typecheck, and it verifies the
 *    live URL afterwards instead of assuming success.
 *
 * Override the target with DEPLOY_HOST / DEPLOY_PATH if the server moves.
 */
import { spawnSync } from 'node:child_process';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';

const HOST = process.env.DEPLOY_HOST ?? 'root@207.180.221.167';
const REMOTE = process.env.DEPLOY_PATH ?? '/srv/getcard/public';
const VERIFY_URL = process.env.DEPLOY_VERIFY_URL ?? 'https://getcard.kg/ru/';
const DIST = 'dist';

const step = (n, msg) => console.log(`\n[${n}/5] ${msg}`);

function run(cmd, args, opts = {}) {
  const r = spawnSync(cmd, args, { stdio: 'inherit', shell: false, ...opts });
  if (r.error) fail(`${cmd} could not be started: ${r.error.message}`);
  if (r.status !== 0) fail(`${cmd} exited with code ${r.status}`);
}

function fail(msg) {
  console.error(`\n✗ deploy aborted: ${msg}\n`);
  process.exit(1);
}

/** Runs a script on the server without fighting shell quoting on either end. */
function remote(script) {
  const b64 = Buffer.from(script, 'utf8').toString('base64');
  run('ssh', ['-o', 'BatchMode=yes', HOST, `echo ${b64} | base64 -d | bash`]);
}

// ---------------------------------------------------------------------------

step(1, 'Typechecking');
run('npx', ['astro', 'check'], { shell: process.platform === 'win32' });

step(2, `Building for the root path (BASE_PATH=/)`);
run('npx', ['astro', 'build'], {
  shell: process.platform === 'win32',
  env: { ...process.env, BASE_PATH: '/' },
});

step(3, 'Uploading to a staging directory');
const entries = readdirSync(DIST).map((name) => join(DIST, name));
if (entries.length === 0) fail('dist/ is empty — nothing to publish');

remote(`set -e
rm -rf ${REMOTE}.new
mkdir -p ${REMOTE}.new`);

run('scp', ['-o', 'BatchMode=yes', '-q', '-r', ...entries, `${HOST}:${REMOTE}.new/`]);

step(4, 'Swapping it in');
// The published directory is bind-mounted into the nginx container, and Docker
// resolved that mount to an inode when the container started. Renaming the
// directory therefore does NOT publish anything — it detaches the mount, and
// the container goes on serving the old, now-unlinked directory until it is
// restarted. So the directory itself must stay put and only its contents are
// replaced. Everything below is inside one ssh round trip to keep the window
// where the directory is empty down to milliseconds.
remote(`set -e
# Readable and traversable by the unprivileged nginx user. The files must not
# live under /root, whose 0700 mode makes every request a 403.
chown -R root:root ${REMOTE}.new
chmod -R a+rX ${REMOTE}.new

mkdir -p ${REMOTE}
find ${REMOTE} -mindepth 1 -delete
cp -a ${REMOTE}.new/. ${REMOTE}/
rm -rf ${REMOTE}.new

echo "published:"
find ${REMOTE} -maxdepth 1 -mindepth 1 -printf '  %f\\n'
du -sh ${REMOTE} | awk '{print "  total " $1}'`);

step(5, `Verifying ${VERIFY_URL}`);
const res = await fetch(VERIFY_URL, { redirect: 'follow' }).catch((e) =>
  fail(`could not reach the site: ${e.message}`)
);
if (!res.ok) fail(`site returned HTTP ${res.status}`);

const html = await res.text();
const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '(no title)';
if (html.includes('/getcard/') || html.includes('Program Files')) {
  fail('published HTML contains wrong asset paths — check BASE_PATH');
}

console.log(`  HTTP ${res.status}  ${title}`);
console.log(`\n✓ live at ${VERIFY_URL}\n`);
