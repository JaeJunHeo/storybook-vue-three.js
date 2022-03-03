import "@storybook/addon-console";
import { addParameters } from '@storybook/vue';

addParameters({ docs: { page: null } });

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}