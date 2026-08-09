# Activating the Pages deploy

`pages-deploy-workflow.yml` belongs at `.github/workflows/deploy.yml`. It is
parked here because the token used to create this repository lacks the
`workflow` scope, and GitHub refuses pushes that add files under
`.github/workflows/` without it.

To activate:

```bash
git mv docs/pages-deploy-workflow.yml .github/workflows/deploy.yml
git commit -m "Activate the Pages deploy workflow"
git push
```

That push needs a token with the `workflow` scope. Alternatively, paste the
file into the GitHub web UI at **Add file → Create new file**, which is not
subject to the scope restriction.

Then set **Settings → Pages → Source** to **GitHub Actions**. The site
publishes to https://gohachad.github.io/getcard/ — which is why
`astro.config.mjs` sets `base: '/getcard'`.
