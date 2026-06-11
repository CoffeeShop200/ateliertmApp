import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import path from 'path'

// https://vite.dev/config/
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
  },
  resolve: {
    alias: {
      // ensure vite resolves the package to its distributed build from project root
    }
  },
})
