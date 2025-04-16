// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/empresaTech/', // Nom del repositori a GitHub
  build: {
    outDir: 'docs',  // Canviem la sortida a la carpeta 'docs'
  },
  plugins: []
})
