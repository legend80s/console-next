import { defineConfig } from 'vite'
import { resolve } from 'path'
import { terser } from 'rollup-plugin-terser'

export default defineConfig({
  server: {
    open: true
  },
  build: {
    target: 'esnext',
    minify: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'consoleNext',
      formats: ['es', 'umd', 'iife']
    },
    rollupOptions: {
      plugins: [
        terser()
      ]
    }
  }
})