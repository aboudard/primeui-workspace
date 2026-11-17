# PrimeUI Examples

This repository contains a shared TypeScript library and three example applications that use Prime UI components: Angular, React, and Vue. It also contains a NestJS backend.

## Repository Layout

- [`lib-primeui/`](lib-primeui/README.md) (`@abo/lib-primeui`): shared TypeScript types and values (`User`, `DEFAULT_USER`) plus the PrimeUIX theme customization defaults (`PrimeUIPreset`).
- `ng-primeui/`: Angular application using PrimeNG, PrimeIcons for Angular, and the shared library.
- `react-primeui/`: React application using PrimeReact UI components, PrimeIcons for React, and the shared library.
- `vue-primeui/`: Vue application using PrimeVue, PrimeIcons for Vue, Vite, and the shared library.
- `back-todo/`: NestJS backend. It does not depend on the shared library.

All five directories are packages of one pnpm workspace ([`pnpm-workspace.yaml`](pnpm-workspace.yaml)) with a single root [`pnpm-lock.yaml`](pnpm-lock.yaml). The apps depend on the library with `"@abo/lib-primeui": "workspace:*"`, so they always use the local `lib-primeui/` sources. Verdaccio is not needed for development.

## Requirements

- Node.js `24.22.3` ([`.nvmrc`](.nvmrc)).
- pnpm `11.9.0`, pinned by the root `packageManager` field. Check with `pnpm -v`. If your global pnpm is a different version, pnpm tries to download the pinned version first; when that download hangs or fails, install pnpm 11.9.0 globally.
- The root [`.npmrc`](.npmrc) sets `registry=https://registry.npmjs.org/` so that installs from the workspace root use the public npm registry, as each package's own `.npmrc` already did.

## Install

Run every command from the repository root:

```sh
pnpm install --frozen-lockfile
```

Install scripts are allowed only for the native packages listed under `allowBuilds` in `pnpm-workspace.yaml` (`@parcel/watcher`, `better-sqlite3`, `esbuild`, `lmdb`, `msgpackr-extract`, `sqlite3`). The `@scarf/scarf` telemetry script is denied.

## Build, Check, and Run

Run commands from the repository root. The root build uses pnpm's dependency-topological workspace order, so the shared library is compiled before its consumers:

| Contract | Command |
| --- | --- |
| Build all packages | `pnpm build` |
| Build library / Angular / React / Vue / backend | `pnpm run build:library` / `pnpm run build:angular` / `pnpm run build:react` / `pnpm run build:vue` / `pnpm run build:backend` |
| Watch the library | `pnpm run watch:library` |
| Run one app (library is built first for UI apps) | `pnpm run dev:angular` / `pnpm run dev:react` / `pnpm run dev:vue` / `pnpm run dev:backend` |
| Run all four apps and watch the library | `pnpm dev` |
| Run one package check | `pnpm run check:library`, `check:angular`, `check:react`, `check:vue`, or `check:backend` |
| Run all package checks | `pnpm check` |

Combined development builds the library before starting its watcher and the applications. pnpm owns the child processes so interruption and startup failures propagate without shell-specific background processes. Angular, React, and Vue bind to `127.0.0.1` on ports `4200`, `5173`, and `5174`; the backend uses port `3000`. React and Vue E2E use distinct strict ports, and Vue's CI preview remains on `4173`.

Checks compose each package's existing build, tests, and non-mutating lint commands. Angular tests run with `--watch=false`; Vue tests run with `vitest run`; Vue's auto-fixing lint scripts are not used by workspace checks. Angular has no lint script, React has no unit-test script, and the library has no test or lint scripts. E2E tests remain package-local (`e2e`, `test:e2e`, or Angular's schematic-managed `ng e2e`). Install Playwright browsers before the first E2E run with `pnpm --filter <app> exec playwright install`.

The package scripts remain available when running `pnpm <script>` from an individual package.

Known failures inherited from `main`:

- React `build` runs `tsc -b` first, which fails on the unused `setTitle` in `react-primeui/src/App.tsx`. `pnpm --filter react-primeui exec vite build` succeeds.
- The Angular unit test expects the old title "Hello, ng-primeui". The Vue unit test mounts the app without PrimeVue.

## Publishing the Library

Publishing is separate from development installs. `@abo/lib-primeui` still publishes to Verdaccio (`publishConfig.registry` = `http://localhost:4873/`) with `npm publish` or `npm run release` from `lib-primeui/`; see the [library README](lib-primeui/README.md). The apps' `.npmrc` files still route the `@abo` scope to Verdaccio, but the workspace link means installs do not contact it.

## Migration baseline (17 November 2026)

The following checks were run before the workspace cutover on Windows with Node 24.22.3 available to package scripts and npm 11.20.0. Installs used the existing npm lockfiles; the npm CLI itself was launched by the system Node 26 for those installs. No release or publish was attempted.

| Package | Baseline |
| --- | --- |
| Library | `npm ci` and `npm run build` passed; no unit, lint, or E2E scripts are defined. |
| Backend | `npm ci`, build, non-fixing lint, unit tests and E2E tests passed. |
| Angular, React, Vue | Each `npm ci` failed with `ECONNREFUSED` fetching the locked library tarball from `localhost:4873`. Builds, unit tests, lint and browser E2E checks therefore remain unverified. React has no unit-test script; Angular has no lint script. |

For a reproducible frontend baseline, restore access to the exact locked tarballs and install Playwright browsers. Vue's unit script watches by default (`npx vitest run` is the one-shot equivalent); its lint scripts modify files, so use `npx oxlint .` and `npx eslint .` for non-fixing checks. Run browser suites sequentially: React and Vue use port 5173, Vue uses 4173 for its CI preview, and Angular uses 4200. Angular component-test configuration also uses 5173.

Migration-sensitive configuration includes Angular's npm package-manager selection, schematic collections and Playwright builder in `angular.json`, plus npm-based VS Code tasks; React and Vue Playwright configurations start servers with `npm run`. The library's `prepublishOnly` runs `npm run build`; release-it requires a clean working tree, publishes to Verdaccio, and creates `v${version}` tags. Preserve these behaviors until their respective migration stages.
