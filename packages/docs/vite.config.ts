import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@enosd-ui/react': path.resolve(__dirname, '../react'),
    },
    preserveSymlinks: true,
  },
  build: {
    rollupOptions: {
      external: [
        'axe-core', 
        'ts-dedent', 
        '@storybook/addon-actions', 
        '@storybook/addon-backgrounds',
        '@storybook/addon-measure',
        '@storybook/addon-outline',
        '@storybook/addon-highlight',
        '@storybook/addon-viewport',
        '@storybook/instrumenter'
      ], 
    },
  },
});