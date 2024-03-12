import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sass from 'vite-plugin-sass'; // Import the plugin for processing SCSS files

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sass() // Add the sass plugin to handle SCSS files
  ]
});
