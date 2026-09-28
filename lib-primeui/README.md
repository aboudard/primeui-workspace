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

## Build

```sh
npm run build
```