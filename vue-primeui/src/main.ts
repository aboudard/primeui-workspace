import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';

import './main.css';

import { AppPreset } from './app.preset.ts';

const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: AppPreset
    },
    license: 'eyJpZCI6IjkwMGUyZDgxLTUwMjUtNDdlNy1iOWE5LTA5NDdlNGM4ZTBkZiIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODI3Mzk0NjksImV4cCI6MTgxNDI3NTQ2OX0.zCMXizvztiaM-bXPfxsK-5fFTCPCdm8itPZCDV_E56QdZO3zE6TqPUmhrIYSc-wTQXOPQH-yNqV02LiTkCbhDw',
});
app.use(createPinia())
app.use(router)

app.mount('#app')
