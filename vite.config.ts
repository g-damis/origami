/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

// Compatibile con ESM
const __filename = fileURLToPath(import.meta.url);
const rootDir = path.dirname(__filename);

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(rootDir, 'src/index.ts'),
      name: 'MyLitComponents',
      fileName: format => `my-lit-components.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['lit'],
      output: {
        globals: {
          lit: 'lit'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@atom_components': path.resolve(rootDir, 'src/atom-components'),
      '@molecule_components': path.resolve(rootDir, 'src/molecule-components'),
      '@layout': path.resolve(rootDir, 'src/layout'),
      '@style': path.resolve(rootDir, 'src/style'),
      '@stories': path.resolve(rootDir, 'src/stories')
    }
  },
});
