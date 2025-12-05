import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
     tailwindcss()
  ],
  server: {
    proxy: {
      // forward /api/* to the makeup API to avoid CORS in dev
      "/api": {
        target: "https://makeup-api.herokuapp.com",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, "/api/v1"),
      },
    },
  },
})
