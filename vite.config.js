import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssMinify: false,
    lib: {
      entry: resolve(__dirname, 'scss/index.scss'),
      name: 'dist',
      fileName: 'index',
    }
  }
})
