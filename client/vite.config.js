import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/images': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      }
    }
  }
})
