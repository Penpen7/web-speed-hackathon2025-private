import { resolve } from 'node:path';

import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './src/main.tsx',
      output: {
        chunkFileNames: 'chunk-[hash].js',
        dir: resolve(__dirname, 'dist'),
        entryFileNames: 'main.js',
        format: 'es',
      },
      plugins: [
        visualizer({
          brotliSize: true,
          filename: 'dist/stats.html',
          gzipSize: true,
          open: true,
        }),
      ],
    },
    sourcemap: true,
    target: 'es2015',
  },
  plugins: [
    react(),
    // 環境変数を設定
    {
      config: () => ({
        define: {
          'process.env.API_BASE_URL': JSON.stringify('/api'),
          'process.env.NODE_ENV': JSON.stringify('production'),
        },
      }),
      name: 'env',
    },
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
});
