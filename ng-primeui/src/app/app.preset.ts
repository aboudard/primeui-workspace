import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import { AppButton } from './app.button';
const AppPreset = definePreset(Aura, {
  //Your customizations, see the following sections for examples
  primitive: {
    borderRadius: {
      none: '0',
      xs: '1px',
      sm: '2px',
      md: '3px',
      lg: '4px',
      xl: '5px',
    },
  },
  semantic: {
    primary: {
      50: '#fce4ec',
      100: '#f8bbd0',
      200: '#f48fb1',
      300: '#f06292',
      400: '#ec407a',
      500: '#e91e63',
      600: '#d81b60',
      700: '#c2185b',
      800: '#ad1457',
      900: '#880e4f',
      950: '#560027',
    },
  },
  components: {
    button: AppButton,
  }
});
export default AppPreset;
