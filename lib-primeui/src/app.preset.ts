import type { Preset } from "@primeuix/themes";

const AppButton = {
  extend: {
    accent: {
      color:
        "linear-gradient(90deg, {primary.color} 0%, #ff2d95 50%, #7f00ff 100%)",
      hoverColor:
        "linear-gradient(90deg, {primary.hover.color} 0%, #df167c 50%, #6500cc 100%)",
      textColor: "#ffffff",
      borderColor: "transparent",
      hoverBorderColor: "transparent",
    },
  },
  css: ({ dt }: any) => `
    .p-button-accent:not(:disabled) {
      background: ${dt("button.accent.color")};
      color: ${dt("button.accent.textColor")};
      border-color: ${dt("button.accent.borderColor")};
      &:hover {
        background: ${dt("button.accent.hoverColor")};
        border-color: ${dt("button.accent.hoverBorderColor")};
      }
    }`,
};

export const PrimeUIPreset = {
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
      50: "#fce4ec",
      100: "#f8bbd0",
      200: "#f48fb1",
      300: "#f06292",
      400: "#ec407a",
      500: "#e91e63",
      600: "#d81b60",
      700: "#c2185b",
      800: "#ad1457",
      900: "#880e4f",
      950: "#560027",
    },
  },
  components: {
    button: AppButton,
    inputtext: {
      root: {
        background: "var(--p-primary-50)",
      },
    },
  },
} satisfies Preset;
