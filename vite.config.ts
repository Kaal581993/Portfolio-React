import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Allow Netlify preview host
    allowedHosts: ['devserver-main--statuesque-bunny-175c85.netlify.app'],

    // Enable polling watcher to reduce Netlify warnings
    watch: {
      usePolling: true,
      interval: 100,
    },

    // Optional: allow external access if needed
    host: true,
  },
})
