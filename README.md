# React UI sample — Crom Services

Public sample of how Crom Services approaches scoped React / Next.js UI work.

This folder demonstrates a minimal React + TypeScript UI with one focused component change: a StatusBadge density toggle that keeps layout and surrounding copy untouched. Portfolio overflow sample only — not a client system.

Vite is used here for a small, fast scaffold. The same scoped-component pattern applies to Next.js (App Router or Pages) delivery.

## Purpose

- Clear, reviewable UI change pattern suitable for a small PR
- Illustrates Crom Services capability for React/Next UI overflow and small builds
- Keeps the change inside one component boundary

## Stack

- React 18 and TypeScript
- Vite for local build and preview
- Vitest + Testing Library for component checks
- Pattern is Next.js-capable (same component can drop into a Next page or layout)

## Layout

- src/App.tsx — single demo page
- src/components/StatusBadge.tsx — scoped density/tone UI change
- src/components/StatusBadge.test.tsx — component tests
- src/styles.css — page chrome only

## How to run

Install dependencies with the package manager, then run the test script and build.

Optional: start the Vite dev server with the dev script.

## Capability

- Code and PR review packs
- Small builds and patches as PRs
- React / Next.js UI work
- API and webhook work

Crom Services · Perth WA · Remote across Australia
Trading as Crom Services

Site: https://cromservices.com.au (placeholder)
Contact: cromservices@gmail.com

## License

MIT — see LICENSE.
