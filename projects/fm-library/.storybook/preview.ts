import type { Preview } from "@storybook/angular";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'hell',
      values: [
        {
          name: 'hell',
          value: '#C0D1E1',
        },
        {
          name: 'dunkel',
          value: '#203864',
        },
      ],
    },
  },
};

export default preview;
