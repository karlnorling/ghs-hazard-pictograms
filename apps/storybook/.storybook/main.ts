import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-vitest', '@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: '@storybook/react-vite',
  // Serve the assets package directory so SVG/CSS sprite stories can load files
  staticDirs: [{ from: '../../../packages/@ghs-hazard-pictograms/assets/assets', to: '/assets' }],
  // Allow overriding the Vite base URL for deployments to a sub-path (e.g. GitHub Pages)
  viteFinal: (config) => {
    if (process.env.STORYBOOK_BASE_PATH) {
      config.base = process.env.STORYBOOK_BASE_PATH;
    }
    return config;
  },
};

export default config;
