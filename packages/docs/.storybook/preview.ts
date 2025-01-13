import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

import '@enosd-ui/react/dist/index.css';

const preview: Preview = {
  tags: ['autodocs'], // Removi a duplicação do 'autodocs'
  parameters: {
    docs: {
      theme: themes.dark,
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'dark', value: '#333333' },
      ],
    },
  },
};

export default preview;