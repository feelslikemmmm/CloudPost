import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import withReactRouter from 'vite-plugin-next-react-router';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    withReactRouter({
      pageDir: 'src/pages',
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      layout: '_layout',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
