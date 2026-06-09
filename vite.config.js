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
    include: ['react-share-social'],
  },
  resolve: {
    alias: {
      // ensure vite resolves the package to its distributed build from project root
      'react-share-social': path.resolve(__dirname, 'node_modules/react-share-social/dist/index.js')
    }
  },
})
