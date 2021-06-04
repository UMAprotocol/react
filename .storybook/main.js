const path = require("path");

const toPath = _path => path.join(process.cwd(), _path);

module.exports = {
  stories: ["../stories/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  // this is needed because Storybook currently doesn't not resolve Emotion 11 correctly. see  https://github.com/storybookjs/storybook/issues/13277
  webpackFinal: async config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/styled": toPath("node_modules/@emotion/styled"),
        },
      },
    };
  },
};
