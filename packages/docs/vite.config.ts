import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@enosd-ui/react': path.resolve(__dirname, '../react'),
      '@storybook/core/docs-tools': path.resolve(__dirname, 'node_modules/@storybook/core/docs-tools'),
    },
    preserveSymlinks: true,
  },
  build: {
    rollupOptions: {
      external: [
        'axe-core', 
        'ts-dedent', 
        'tiny-invariant', 
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