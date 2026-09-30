# PrimeUI Examples

This repository contains a shared TypeScript library and three example applications that use Prime UI components: Angular, React, and Vue.

## Repository Layout

- [`lib-primeui/`](lib-primeui/README.md): shared TypeScript types and values (`User`, `DEFAULT_USER`) plus the PrimeUIX theme customization defaults (`PrimeUIPreset`).
- `ng-primeui/`: Angular application using PrimeNG, PrimeIcons for Angular, and the shared library.
- `react-primeui/`: React application using PrimeReact UI components, PrimeIcons for React, and the shared library.
- `vue-primeui/`: Vue application using PrimeVue, PrimeIcons for Vue, Vite, and the shared library.

Each directory is an independent npm package with its own `package.json` and dependencies. There is no root-level npm workspace or root-level build script.

## Requirements

- Node.js and npm. Vue requires Node.js `^22.18.0` or `>=24.12.0`.

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

## Shared Library Dependency

All three example apps declare `lib-primeui` as an npm dependency. The library package sets its publish registry to `http://localhost:4873/`, so publishing or installing a newly released local version requires that Verdaccio registry to be running. For library development, build it from `lib-primeui/` with `npm run build`.