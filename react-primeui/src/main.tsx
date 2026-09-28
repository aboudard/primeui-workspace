import { PrimeReactProvider } from "@primereact/core";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AppPreset } from "./app.preset.ts";

const primereact = {
  theme: {
    preset: AppPreset,
  },
  license: 'eyJpZCI6IjkwMGUyZDgxLTUwMjUtNDdlNy1iOWE5LTA5NDdlNGM4ZTBkZiIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODI3Mzk0NjksImV4cCI6MTgxNDI3NTQ2OX0.zCMXizvztiaM-bXPfxsK-5fFTCPCdm8itPZCDV_E56QdZO3zE6TqPUmhrIYSc-wTQXOPQH-yNqV02LiTkCbhDw',
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider {...primereact}>
      <App />
    </PrimeReactProvider>
  </StrictMode>,
);
