import type { StorybookConfig } from "@storybook/angular";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  staticDirs: ['../assets'],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
  core: {
    builder: "@storybook/builder-webpack5"
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
