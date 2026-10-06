import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Served from GitHub Pages at https://howardguoui.github.io/howardreactmainpage/
export default defineConfig({
  base: '/howardreactmainpage/',
  plugins: [react(), tailwindcss()],
})
