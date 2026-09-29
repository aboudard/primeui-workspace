# PrimeUI Examples

This repository contains a shared TypeScript library and two small example applications that use Prime UI components: one built with Angular and one with React.

## Repository Layout

- [`lib-primeui/`](lib-primeui/README.md): shared TypeScript types and values (`User`, `DEFAULT_USER`) plus the PrimeUIX theme customization defaults (`PrimeUIPreset`).
- `ng-primeui/`: Angular application using PrimeNG, PrimeIcons for Angular, and the shared library.
- `react-primeui/`: React application using PrimeReact UI components, PrimeIcons for React, and the shared library.

Each directory is an independent npm package with its own `package.json` and dependencies. There is no root-level npm workspace or root-level build script.

## Requirements

- Node.js and npm

Install dependencies from the package directory you intend to work on. The library and each app have separate dependency installations.

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
npm run lint
npm run preview
```

## Shared Library Dependency

Both example apps declare `lib-primeui` as an npm dependency. The library package also sets its publish registry to `http://localhost:4873/`; publishing or installing a newly released local version therefore depends on that registry being available and configured. For ordinary library development, build it from `lib-primeui/` with `npm run build`.