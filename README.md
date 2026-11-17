# PrimeUI Examples

This repository contains a shared TypeScript library and three example applications that use Prime UI components: Angular, React, and Vue.

## Repository Layout

- [`lib-primeui/`](lib-primeui/README.md): shared TypeScript types and values (`User`, `DEFAULT_USER`) plus the PrimeUIX theme customization defaults (`PrimeUIPreset`).
- `ng-primeui/`: Angular application using PrimeNG, PrimeIcons for Angular, and the shared library.
- `react-primeui/`: React application using PrimeReact UI components, PrimeIcons for React, and the shared library.
- `vue-primeui/`: Vue application using PrimeVue, PrimeIcons for Vue, Vite, and the shared library.

These four directories and `back-todo/` (a NestJS backend) are independent npm packages with their own `package.json`, `package-lock.json`, and dependencies. There is no root-level npm workspace or root-level build script.

## Requirements

- Node.js `24.22.3` is pinned in [`.nvmrc`](.nvmrc). Use a Node version manager that supports this file or install that exact version from Node.js. The current lockfiles' declared Node engines accept this version; notably Angular 22 and Vue's resolved jsdom require Node `^24.15.0` on the Node 24 line.
- npm remains the package manager for each package at this stage. Angular declares `npm@11.16.0`.
- The planned workspace toolchain uses pnpm `10.34.9` (Node `>=18.12`). It is not used by the current packages yet. When needed, provision it explicitly with `npm install --global pnpm@10.34.9` and verify `pnpm --version`; this does not depend on Corepack. A root `packageManager` declaration and pnpm lockfile are deferred to the workspace cutover.

Install dependencies from the package directory you intend to work on. The library and each app have separate dependency installations and scripts.

## Shared Library

```sh
cd lib-primeui
npm install
npm run build
```

The TypeScript build writes compiled JavaScript and declarations to `lib-primeui/dist/`. See the [library README](lib-primeui/README.md) for API examples, including extending `PrimeUIPreset` with PrimeUIX `definePreset`.

## Angular App

```sh
cd ng-primeui
npm install
npm start
```

The development server is available at `http://localhost:4200/`. Other available scripts:

```sh
npm run build
npm test
npm run e2e
```

## React App

```sh
cd react-primeui
npm install
npm run dev
```

Vite prints the development URL when the server starts. Other available scripts:

```sh
npm run build
npm run e2e
npm run lint
npm run preview
```

## Vue App

```sh
cd vue-primeui
npm install
npm run dev
```

Vite prints the development URL when the server starts. Other available scripts:

```sh
npm run build
npm run test:unit
npm run test:e2e
npm run lint
npm run preview
```

Install Playwright browsers before the first E2E run with `npx playwright install`.

## Backend

```sh
cd back-todo
npm install
npm run build
npm run lint
npm test
npm run test:e2e
```

The backend listens on port 3000 by default. TypeORM currently uses an in-memory `better-sqlite3` database; both `better-sqlite3` and `sqlite3` are native dependencies whose installation scripts and platform support need checking during the cutover.

## Shared Library Dependency

All three example apps declare `lib-primeui` as an npm dependency. The library package sets its publish registry to `http://localhost:4873/`, so publishing or installing a newly released local version requires that Verdaccio registry to be running. For library development, build it from `lib-primeui/` with `npm run build`.

The Angular and React lockfiles resolve `lib-primeui` 1.1.1 from that registry; Vue resolves 1.1.2. The library source is currently 1.1.2. A workspace cutover must explicitly address these version and resolution differences, rather than assuming the current installs already link to local source. The backend does not depend on the library.

## Migration baseline (17 November 2026)

The following checks were run before the workspace cutover on Windows with Node 24.22.3 available to package scripts and npm 11.20.0. Installs used the existing npm lockfiles; the npm CLI itself was launched by the system Node 26 for those installs. No release or publish was attempted.

| Package | Baseline |
| --- | --- |
| Library | `npm ci` and `npm run build` passed; no unit, lint, or E2E scripts are defined. |
| Backend | `npm ci`, build, non-fixing lint, unit tests and E2E tests passed. |
| Angular, React, Vue | Each `npm ci` failed with `ECONNREFUSED` fetching the locked library tarball from `localhost:4873`. Builds, unit tests, lint and browser E2E checks therefore remain unverified. React has no unit-test script; Angular has no lint script. |

For a reproducible frontend baseline, restore access to the exact locked tarballs and install Playwright browsers. Vue's unit script watches by default (`npx vitest run` is the one-shot equivalent); its lint scripts modify files, so use `npx oxlint .` and `npx eslint .` for non-fixing checks. Run browser suites sequentially: React and Vue use port 5173, Vue uses 4173 for its CI preview, and Angular uses 4200. Angular component-test configuration also uses 5173.

Migration-sensitive configuration includes Angular's npm package-manager selection, schematic collections and Playwright builder in `angular.json`, plus npm-based VS Code tasks; React and Vue Playwright configurations start servers with `npm run`. The library's `prepublishOnly` runs `npm run build`; release-it requires a clean working tree, publishes to Verdaccio, and creates `v${version}` tags. Preserve these behaviors until their respective migration stages.
All three example apps declare `@abo/lib-primeui` as an npm dependency. The library package sets its publish registry to `http://localhost:4873/`, so publishing or installing a newly released local version requires that Verdaccio registry to be running. For library development, build it from `lib-primeui/` with `npm run build`.

## Registry npm et dépendances privées

La librairie partagée s'appelle désormais **`@abo/lib-primeui`** (anciennement `lib-primeui`). Ordre de mise en route :

1. Démarrer Verdaccio (`http://localhost:4873/`).
2. Publier la librairie : `cd lib-primeui && npm install && npm publish`.
3. Dans chaque application (`ng-primeui`, `react-primeui`, `vue-primeui`) : `npm install` pour régénérer le `package-lock.json`.

Chaque application a un `.npmrc` qui envoie le scope `@abo` vers Verdaccio et tout le reste vers `https://registry.npmjs.org/`.
