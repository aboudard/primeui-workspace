export interface User {
  id: number;
  name: string;
}

export { PrimeUIPreset } from "./app.preset.js";

export const DEFAULT_USER: User = {
  id: 0,
  name: "Anonyme",
};
