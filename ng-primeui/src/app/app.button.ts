export const AppButton = {
  extend: {
    accent: {
      color: 'linear-gradient(90deg, {primary.color} 0%, #ff2d95 50%, #7f00ff 100%)',
      hoverColor: 'linear-gradient(90deg, {primary.hover.color} 0%, #df167c 50%, #6500cc 100%)',
      textColor: '#ffffff',
      borderColor: 'transparent',
      hoverBorderColor: 'transparent',
    },
  },
  css: ({ dt }: any) => `
    .p-button-accent:not(:disabled) {
      background: ${dt('button.accent.color')};
      color: ${dt('button.accent.textColor')};
      border-color: ${dt('button.accent.borderColor')};
      &:hover {
        background: ${dt('button.accent.hoverColor')};
        border-color: ${dt('button.accent.hoverBorderColor')};
      }
    }`,
};
