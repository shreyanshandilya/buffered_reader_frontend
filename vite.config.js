import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Adjust if your app is not hosted at the root
  build: {
    outDir: 'dist'
  }
});
