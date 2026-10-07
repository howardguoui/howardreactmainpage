import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Served from GitHub Pages at https://howardguoui.github.io/ (repo howardguoui/howardguoui.github.io)
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
