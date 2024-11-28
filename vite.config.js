import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/session': {
        target: 'http://193.227.240.27',
        changeOrigin: true,
        secure: false,
      },
      '/llm': {
        target: 'http://193.227.240.27',
        changeOrigin: true,
        secure: false,
      },
      '/params': {
        target: 'http://193.227.240.27',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})

