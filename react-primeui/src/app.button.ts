export const AppButton = {
  extend: {
    accent: {
      color:
        "linear-gradient(90deg, {primary.color} 0%, #6088ff 50%, #9035ff 100%)",
      hoverColor:
        "linear-gradient(90deg, {primary.hover.color} 0%, #5276e8 50%, #7b2edb 100%)",
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
