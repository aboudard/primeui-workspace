import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'
import { PrimeUIPreset } from 'lib-primeui'

export const AppPreset = definePreset(Aura, PrimeUIPreset, {
  semantic: {
    primary: {
      50: '#eaf8f1',
      100: '#d5f1e3',
      200: '#abe3c7',
      300: '#81d5ab',
      400: '#5fc895',
      500: '#42b883',
      600: '#369c70',
      700: '#2b805d',
      800: '#20644a',
      900: '#154837',
      950: '#0e3025',
    },
  },
  components: {
    button: {
      extend: {
        accent: {
          color: 'linear-gradient(90deg, {primary.color} 0%, #22a899 50%, #0fbbd0 100%)',
          hoverColor: 'linear-gradient(90deg, {primary.hover.color} 0%, #198574 50%, #0b8999 100%)',
        },
      },
    },
  },
})
