# Publishing this site

The site is **not live yet**. One setting has to change, and it is a single
dropdown.

## Why it 404s right now

Pages is set to **Deploy from a branch**, pointed at `main`. In that mode
GitHub runs its built-in Jekyll build, which has failed twice — `main` has no
root `index.html`, because the pages only exist after `astro build` runs.
Astro cannot be published from a source branch that way.

## The fix: point Pages at `gh-pages`

The `gh-pages` branch already exists and already contains the built site.

**Settings → Pages → Branch: `gh-pages`, folder `/ (root)` → Save.**

That is the whole change. The site then serves at
https://gohachad.github.io/getcard/ — which is why `astro.config.mjs` sets
`base: '/getcard'`.

`gh-pages` carries a `.nojekyll` file, and it must keep it: Astro emits
hashed assets into `_astro/`, and Jekyll silently drops directories whose
names start with an underscore. Without it the CSS and both fonts vanish and
the page renders unstyled.

### Redeploying after a change to `main`

```bash
npm run build

WT=../getcard-gh-pages
git worktree add -B gh-pages "$WT" origin/gh-pages
rm -rf "$WT"/* && cp -r dist/. "$WT"/ && touch "$WT/.nojekyll"
git -C "$WT" add -A && git -C "$WT" commit -m "Publish built site"
git -C "$WT" push origin gh-pages
git worktree remove "$WT"
```

## The cleaner alternative: build in CI

Publishing a build artefact from a branch means the built output lives in git,
and every deploy is a manual step that can be forgotten. Building in CI avoids
both. It needs two things:

1. Move the parked workflow into place:

   ```bash
   git mv docs/pages-deploy-workflow.yml .github/workflows/deploy.yml
   git commit -m "Activate the Pages deploy workflow"
   git push
   ```

   That push requires a token with the **`workflow`** scope. The token used to
   build this repository does not have it, which is why the file is parked
   here rather than in place. The GitHub web UI is not subject to the
   restriction: **Add file → Create new file**, path
   `.github/workflows/deploy.yml`, paste the parked file's contents.

2. Set **Settings → Pages → Source** to **GitHub Actions**.

Once that is running, `gh-pages` can be deleted — CI builds from `main` on
every push and `astro check` guards the locale files, so a missing
translation key fails the build instead of shipping a wrong-language string.
