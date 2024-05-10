import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        "name":"主的喜樂",
        "short_name":"主的喜樂",
        "start_url":"/",
        "display":"standalone",
        "lang":"en",
        "scope":"/",
        "theme_color": "#ffffff",
        "background_color": "#eeeeee",
        "description": "主的喜樂-joyolordapp",
        "icons": [
          {
            "src": "assets/icons/icon-48.webp",
            "type": "image/png",
            "sizes": "48x48",
            "purpose": "any maskable"
          },
          {
            "src": "assets/icons/icon-72.webp",
            "type": "image/png",
            "sizes": "72x72",
            "purpose": "any maskable"
          },
          {
            "src": "assets/icons/icon-96.webp",
            "type": "image/png",
            "sizes": "96x96",
            "purpose": "any maskable"
          },
          {
            "src": "assets/icons/icon-128.webp",
            "type": "image/png",
            "sizes": "128x128",
            "purpose": "any maskable"
          },
          {
            "src": "assets/icons/icon-192.webp",
            "type": "image/png",
            "sizes": "192x192",
            "purpose": "any maskable"
          },
          {
            "src": "assets/icons/icon-256.webp",
            "type": "image/png",
            "sizes": "256x256",
            "purpose": "any maskable"
          },
          {
            "src": "assets/icons/icon-512.webp",
            "type": "image/png",
            "sizes": "512x512",
            "purpose": "any maskable"
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
