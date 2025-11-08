import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Atur `base` ke '/' untuk repositori utama GitHub Pages (misalnya, `username.github.io`).
  // Jika ini adalah repositori proyek (misalnya, `username.github.io/my-project`),
  // Anda harus mengubahnya menjadi `base: '/my-project/'`.
  base: '/',
})