import type { StorybookConfig } from "@storybook/react-vite";
import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-essentials"),   
    getAbsolutePath("@storybook/addon-actions"),      
    getAbsolutePath("@storybook/addon-backgrounds"),   
    getAbsolutePath("@storybook/addon-interactions"), 
    getAbsolutePath("@storybook/addon-viewport"), 
    getAbsolutePath("@storybook/addon-a11y"),         
    getAbsolutePath("@storybook/addon-onboarding"),   
    getAbsolutePath("@chromatic-com/storybook"),       
    getAbsolutePath("@storybook/addon-measure"),       
    getAbsolutePath("@storybook/addon-outline"),       
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  viteFinal: async (config, { configType }) => {
    if (configType === "PRODUCTION") {
      config.base = '/enosd-ui';
    }
    
    return config;
  },
};

export default config;
