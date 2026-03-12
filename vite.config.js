import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Kisah-Klasik-Kopi/', // <-- WAJIB SESUAI NAMA REPO GITHUB KAMU, JANGAN LUPA GARIS MIRING DI AWAL DAN AKHIR
})