# Vinay Portfolio

A Vite + React portfolio site rebuilt from the supplied Lovable preview and set up to be easy to push to GitHub.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy notes

- The app uses `HashRouter`, which is friendlier for GitHub Pages.
- `vite.config.js` already uses a relative `base`, so static hosting is simpler.
- `node_modules` and `dist` are ignored through `.gitignore`.

## GitHub Pages

This project is set up for GitHub Pages with a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

1. Create a GitHub repository for this folder.
2. Push the contents of this folder to the `main` branch.
3. In the repository on GitHub, open `Settings` -> `Pages`.
4. Under `Build and deployment`, set `Source` to `GitHub Actions`.
5. Push again if needed, then wait for the `Deploy to GitHub Pages` workflow to finish.

Your site URL will usually be:

- `https://<username>.github.io/<repository-name>/`

Because this app uses `HashRouter`, the route-friendly share link format will look like:

- `https://<username>.github.io/<repository-name>/#/`
