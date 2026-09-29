import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";
import { PrimeUIPreset } from "lib-primeui";

export const AppPreset = definePreset(Aura, PrimeUIPreset, {
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
    button: {
      extend: {
        accent: {
          color:
            "linear-gradient(90deg, {primary.color} 0%, #6088ff 50%, #9035ff 100%)",
          hoverColor:
            "linear-gradient(90deg, {primary.hover.color} 0%, #5276e8 50%, #7b2edb 100%)",
        },
      },
    },
  },
});
