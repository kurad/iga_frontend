import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginRequire from 'vite-plugin-require';
// import path from 'path';

const path = require('path');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vitePluginRequire(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'jquery': path.join(__dirname, '/node_modules/jquery/dist/jquery.min.js')
    }
  }
})
