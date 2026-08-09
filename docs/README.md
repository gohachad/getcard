# Activating the Pages deploy

`pages-deploy-workflow.yml` belongs at `.github/workflows/deploy.yml`. It is
parked here because the token used to create this repository lacks the
`workflow` scope, and GitHub refuses pushes that add files under
`.github/workflows/` without it.

## Step 1: put the workflow in place

```bash
git mv docs/pages-deploy-workflow.yml .github/workflows/deploy.yml
git commit -m "Activate the Pages deploy workflow"
git push
```

That push needs a token with the `workflow` scope. Alternatively, paste the
file into the GitHub web UI at **Add file → Create new file**, which is not
subject to the scope restriction.

## Step 2: switch the Pages source

Set **Settings → Pages → Source** to **GitHub Actions**.

Pages is currently set to **Deploy from a branch**, which runs GitHub's
built-in Jekyll build. That build has already run once and failed, because
this repository has no root `index.html` — the page only exists after
`astro build`. Astro cannot be published that way; the source has to be
GitHub Actions so the workflow above produces the artifact.

The site publishes to https://gohachad.github.io/getcard/ — which is why
`astro.config.mjs` sets `base: '/getcard'`. Both steps are required: the
workflow alone does nothing while the source is still a branch, and switching
the source alone does nothing while there is no workflow.
