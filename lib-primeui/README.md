# lib-primeui

A small TypeScript library providing a `User` type and a default user value.

## Install

```sh
npm install @abo/lib-primeui
```

## Usage

```ts
import { DEFAULT_USER, type User } from "@abo/lib-primeui";

const user: User = { ...DEFAULT_USER, id: 1, name: "Ada" };
```

`DEFAULT_USER` is `{ id: 0, name: "Anonyme" }`.

## PrimeUIX Preset

`PrimeUIPreset` exports the shared theme defaults as a `definePreset` extension.
Apps can pass additional extensions afterward to override those defaults:

```ts
import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";
import { PrimeUIPreset } from "@abo/lib-primeui";

const AppPreset = definePreset(Aura, PrimeUIPreset, {
	semantic: {
		primary: {
			500: "#087ea4",
		},
	},
});
```

## Build

```sh
npm run build
```

## Registry npm et dépendances privées

Cette librairie a été renommée de `lib-primeui` en **`@abo/lib-primeui`** : un paquet sans scope ne peut pas être orienté vers un registry précis via `.npmrc`, et `lib-primeui` n'existe pas sur npmjs.org.

Elle est publiée uniquement sur le Verdaccio local (`publishConfig.registry` = `http://localhost:4873/`).

> Prérequis : Verdaccio doit tourner sur `http://localhost:4873/` et vous devez y être connecté (`npm login --registry http://localhost:4873/`).

```bash
npm install
npm run build
npm publish          # ou : npm run release
```

Consommateurs : `../ng-primeui`, `../react-primeui`, `../vue-primeui`. L'ancien paquet `lib-primeui` peut être retiré de Verdaccio une fois ceux-ci migrés.
