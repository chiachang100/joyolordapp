import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}']
      },
      manifest: {
        "short_name": "主的喜樂",
        "name": "主的喜樂",
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
        ],
        "start_url": "/",
        "scope":"/",
        "display": "standalone",
        "theme_color": "#ffffff",
        "background_color": "#eeeeee",
        "description": "主的喜樂-joyolordapp"
      }
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  }
})
