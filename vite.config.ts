import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  resolve: {
    alias: {
      '@atom_components': path.resolve(__dirname, 'src/atom-components'),
      '@app': path.resolve(__dirname, 'src/app'),
      '@setup': path.resolve(__dirname, 'src/setup')
    }
  }
});
