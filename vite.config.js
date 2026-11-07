import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// BASE_PATH is set automatically by the GitHub Pages workflow:
//   "/"            for a user site   (YasiDerak.github.io)
//   "/<repo>/"     for a project site (YasiDerak.github.io/<repo>/)
// Locally it defaults to "/".
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
  build: {
    assetsInlineLimit: 2048,
  },
})
