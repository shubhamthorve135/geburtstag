import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/geburtstag/',
  build: {
    sourcemap: false
  },
})