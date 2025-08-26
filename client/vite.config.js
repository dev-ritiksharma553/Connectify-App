import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/',             // Ensures SPA routing works
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  publicDir: 'public',   // Points to public folder inside client/
  build: {
    outDir: 'dist',      // Build output inside client/dist
    rollupOptions: {
      external: ['next-themes', 'tw-animate-css'], // Optional if you want to externalize
    },
  },
});
