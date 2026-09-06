# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio SPA for Jose Villa. React 19 + TypeScript + Vite 7, React Router v7, `react-icons`, plain CSS. No backend, no state library, no test framework.

## Commands

```bash
npm run dev           # Vite dev server on :5173
npm run build         # tsc -b (project references) then vite build -> dist/
npm run preview       # serve the production build
npm run lint          # eslint, --max-warnings 0
npm run lint:fix
npm run format        # prettier --write on src/**
npm run format:check
```

There are **no tests** — no runner, no test files. Do not invent a test command or claim tests pass; verify changes by running the dev server (`.claude/launch.json` defines the `portfolio-dev` preview config).

Package manager: `package-lock.json` and `pnpm-lock.yaml` are both committed, but npm is what the tooling actually uses (`.husky/pre-commit` and `.claude/launch.json` both assume npm). Use npm and keep `package-lock.json` current; the README's pnpm instructions are stale.

Node is managed by nvm4w (`C:\nvm4w\nodejs` is a symlink to the active version under `%LOCALAPPDATA%\nvm`). If `npm`/`npx` ever die with `Cannot find module ...npm-cli.js`, the selected Node version is missing its bundled npm (no `node_modules/` in that version's folder) — switching with `nvm use <version>` to a healthy one fixes it. As of 2026-09-06 the active version is v22.18.0 with npm 10.9.3 and `npm ...` works normally; v22.12.0 is still installed but broken.

`npm run lint` runs with `--max-warnings 0` and the pre-commit hook (husky + lint-staged) runs the same on staged files, so a warning-level rule blocks commits — notably `no-console` and `@typescript-eslint/no-explicit-any`.

## Architecture

### Content lives in data modules, not in JSX

Every piece of portfolio content is a typed constant. Pages read from these and render; they contain no hardcoded copy worth editing.

- `src/constants/index.ts` — `APP_CONFIG` (name, role, tagline, availability), `SOCIAL_LINKS`, `ROUTES`, `NAV_ITEMS`, `CV_CONFIG`, `STATS`. All `as const`.
- `src/data/index.ts` — `EXPERIENCE`, `PROJECTS`, `EDUCATION`, `CREDENTIALS`, `AWARDS`, `LANGUAGES`, `SKILL_GROUPS`, each typed against `src/types/index.ts`.

To change what the site says, edit these files. To change how it looks, edit the page/component and CSS. `STATS` is denormalised from the data files — its comment says to keep it in sync by hand.

### Adding a route

Four coordinated edits: add the path to `ROUTES` (and `NAV_ITEMS` if it belongs in the nav) in `src/constants/index.ts`, create the page in `src/pages/`, re-export it from `src/pages/index.ts`, add a `<Route>` in `src/App.tsx`. `App.tsx` wraps everything in `Layout` (header + `<main>` + footer) and calls `useScrollToTop()`; the catch-all `*` route renders `NotFound`.

`public/_redirects` (`/* /index.html 200`) is what makes `BrowserRouter` deep links work on Netlify-style hosts — keep it when changing hosting.

### Barrel exports + path aliases

Every folder has an `index.ts`. Components are default-exported from their file and re-exported by name (`export { default as CVButton } from './CVButton'`). Import through aliases, never relative paths across folders:

```ts
import { Layout } from '@components/layout'
import { CVButton } from '@components/ui'
import { useTheme } from '@hooks/index'
import { EXPERIENCE } from '@data/index'
import type { Project } from '@src/types'
```

Aliases (`@/`, `@src`, `@assets`, `@components`, `@pages`, `@hooks`, `@utils`, `@styles`, `@data`, `@constants`) are declared **twice** — `compilerOptions.paths` in `tsconfig.app.json` for the type checker and `resolve.alias` in `vite.config.ts` for the bundler. A new alias must be added to both or the build breaks in one of the two.

### Styling: global CSS, tokens, BEM-ish classes

No CSS-in-JS, no utility framework, no per-component `.css` files. `src/styles/main.css` is imported once from `main.tsx` and `@import`s five files in order:

| File             | Holds                                                                  |
| ---------------- | ---------------------------------------------------------------------- |
| `tokens.css`     | design tokens only — type scale, spacing, radii, motion, palettes      |
| `base.css`       | reset + base element typography                                        |
| `layout.css`     | app shell, header, footer, `.container`, `.section` primitives         |
| `components.css` | reusable pieces — `.btn`, tags, cards, timeline, social links          |
| `pages.css`      | page-specific sections — `.hero`, `.stats`, `.skills`, `.contact-grid` |

Put a new rule in the file that matches its scope. Class names follow `block__element` / `block--modifier` with `is-*` state classes (`.header__link.is-active`).

Never hardcode a colour, spacing value, radius or transition — use the `--*` custom properties from `tokens.css`. Dark is the default palette on `:root`; light is a separate hand-tuned palette under `[data-theme='light']`, not an inversion. `useTheme` (in `src/hooks/index.ts`) writes `data-theme` onto `<html>` and persists to `localStorage`, falling back to `prefers-color-scheme`. Any new colour needs a value in both palette blocks.

### Motion

Entrances are CSS-only — no animation library. Two pieces:

- `useInView` (in `src/hooks/index.ts`) latches an `IntersectionObserver` once, with a 1.2s fail-open timer: if the observer never delivers its first entry (occluded frames, hidden tabs, screenshot tooling), the content shows anyway rather than staying at `opacity: 0`.
- `<Reveal>` (in `src/components/ui/`) puts one observer on a _group_ and staggers its direct children via `:nth-child` delays, so a list costs one observer, not N. Pass the layout class to it (`<Reveal className="card-grid">`) so no extra wrapper enters the box model.

Two rules that are easy to get wrong:

1. **`--fast` / `--base` / `--slow` already include the easing** (`420ms var(--ease)`). Appending `var(--ease)` after one gives the shorthand two timing functions, which makes it invalid — the whole `animation`/`transition` declaration is silently dropped. Write `animation: reveal-in var(--slow) both`.
2. Entrances animate the **`translate`** property, never `transform`, so hover lifts (`.card:hover { transform: … }`) compose instead of fighting `animation-fill-mode`.

Every hidden state lives inside `@media (prefers-reduced-motion: no-preference)` — with motion off nothing is ever stranded invisible. Keep it that way when adding effects.

### Hooks

`src/hooks/index.ts` holds all three shared hooks: `useTheme`, `useScrollToTop` (fires on every route change, mounted in `App`), and `useMediaQuery` (built on `useSyncExternalStore` so the first render reports the real match — don't rewrite it as state-in-an-effect).

## Conventions

Prettier config is unusual and enforced by ESLint (`prettier/prettier: error`): **no semicolons**, single quotes, `arrowParens: 'avoid'`, 80-column width, LF endings.

TypeScript runs with `verbatimModuleSyntax` and `erasableSyntaxOnly`, so type-only imports must use `import type { ... }`, and enums/parameter properties/namespaces are rejected. `noUnusedLocals` and `noUnusedParameters` are on — prefix intentionally unused params with `_`.

## Private content

`docs/personal/` is gitignored because the repo is public. It holds the source background material behind the CV and data files. Read it for context when writing portfolio copy, but never copy raw personal details (phone, address, anything not already in `SOCIAL_LINKS`) into tracked files.
