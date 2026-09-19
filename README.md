# Next.js UI sample — Crom Services

Public Next.js App Router sample of how Crom Services closes a **finish-gap**: leave half-built chrome as stub, and ship one scoped component (`StatusBadge` density / tone).

This is a real Next.js app with `output: 'export'`, not a Vite clone labelled as Next. Portfolio overflow sample only — not a client system.

**Live:** [https://cromservices.github.io/next-ui-sample/](https://cromservices.github.io/next-ui-sample/) (project Pages from the `gh-pages` branch — enable once under Settings → Pages if the URL still 404s)

Sister sample (static job page): [https://cromservices.github.io/job-page-sample/](https://cromservices.github.io/job-page-sample/)

## Purpose

- Clickable public demo of a Next.js App Router delivery on GitHub Pages
- Reviewable UI change: stub panel stays unfinished; StatusBadge is the shipped piece
- Same component-boundary pattern used for small React / Next PRs

## Stack

- Next.js 15 App Router
- React 18 and TypeScript
- Static export (`output: 'export'`) with `basePath` / `assetPrefix` for the project Pages URL `/next-ui-sample`
- Vitest + Testing Library for `StatusBadge` (Vite is the test runner only — the app itself is Next.js)

## Layout

- `app/page.tsx` — finish-gap demo page (server component)
- `app/layout.tsx` — document shell
- `src/components/StatusBadge.tsx` — scoped density / tone UI
- `src/components/StatusBadgeDemo.tsx` — client density toggle
- `src/components/StatusBadge.test.tsx` — component tests
- `.github/workflows/deploy-pages.yml` — build + deploy to GitHub Pages on `main`

## How to run

```bash
npm install
npm test
npm run dev
```

Dev server: http://localhost:3000

Static export (local paths, no Pages prefix):

```bash
npm run build
npm run preview
```

Pages-shaped export (`/next-ui-sample` prefix, matches the live site):

```bash
npm run build:pages
```

GitHub Actions on `main` runs `build:pages` and publishes the `out/` folder to the `gh-pages` branch. GitHub Pages serves that branch at the live URL. `public/.nojekyll` (and the deploy action) keep the `_next` asset folder from being ignored by Jekyll.

Enable the project site once (admin): **Settings → Pages → Deploy from a branch → `gh-pages` / root → Save**. The export is already on `gh-pages`; after that switch the live URL should return 200.

## Capability

- Code and PR review packs
- Small builds and patches as PRs
- React / Next.js UI work
- API and webhook work

Crom Services · Perth WA · Remote across Australia  
Trading as Crom Services

Site: https://cromservices.github.io/job-page-sample/packs/  
Contact: cromservices@gmail.com

## License

MIT — see LICENSE.
