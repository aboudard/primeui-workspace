import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";
import { AppButton } from "./app.button";

export const AppPreset = definePreset(Aura, {
  //Your customizations, see the following sections for examples
  primitive: {
    borderRadius: {
      none: "0",
      xs: "1px",
      sm: "2px",
      md: "3px",
      lg: "4px",
      xl: "5px",
    },
  },
  semantic: {
    primary: {
      50: "#e6f4f8",
      100: "#cce9f1",
      200: "#99d3e3",
      300: "#66bdd5",
      400: "#33a7c7",
      500: "#087ea4",
      600: "#066a8a",
      700: "#05566f",
      800: "#044254",
      900: "#022e3a",
      950: "#01171d",
    },
  },
  components: {
    button: AppButton,
  },
});
