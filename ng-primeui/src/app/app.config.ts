import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import { PrimeUIPreset } from 'lib-primeui';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';

const AppPreset = definePreset(Aura, PrimeUIPreset);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePrimeNG({
      license:
        'eyJpZCI6IjkwMGUyZDgxLTUwMjUtNDdlNy1iOWE5LTA5NDdlNGM4ZTBkZiIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODI3Mzk0NjksImV4cCI6MTgxNDI3NTQ2OX0.zCMXizvztiaM-bXPfxsK-5fFTCPCdm8itPZCDV_E56QdZO3zE6TqPUmhrIYSc-wTQXOPQH-yNqV02LiTkCbhDw',
      theme: {
        preset: AppPreset,
      },
    }),
  ],
};
