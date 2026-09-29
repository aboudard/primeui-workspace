# lib-primeui

A small TypeScript library providing a `User` type and a default user value.

## Install

```sh
npm install lib-primeui
```

## Usage

```ts
import { DEFAULT_USER, type User } from "lib-primeui";

const user: User = { ...DEFAULT_USER, id: 1, name: "Ada" };
```

`DEFAULT_USER` is `{ id: 0, name: "Anonyme" }`.

## PrimeUIX Preset

`PrimeUIPreset` exports the shared theme defaults as a `definePreset` extension.
Apps can pass additional extensions afterward to override those defaults:

```ts
import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";
import { PrimeUIPreset } from "lib-primeui";

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