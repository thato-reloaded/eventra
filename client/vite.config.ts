import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
      
    }),
  ],
  resolve: {
    dedupe: ['react', 'react-dom']  // Force single React instance
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-intersection-observer']
  },
  server: {
    port: 3000,
  },
})
