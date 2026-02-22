import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    // Generates .gz files; Cloudflare/Netlify will serve these automatically
    compression({
      algorithm: 'gzip',
      ext: '.gz',
    })
  ],
  build: {
    // 1. Minification strategy
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Removes console.logs for production performance
        drop_debugger: true,
      },
    },
    // 2. Splitting the "Vendor" (Libraries) from your "App" code
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Group heavy libraries into their own chunks
            if (id.includes('framer-motion')) return 'vendor-motion';
            if (id.includes('lucide-react')) return 'vendor-icons';
            if (id.includes('@formspree')) return 'vendor-forms';
            return 'vendor'; // everything else
          }
        },
      },
    },
    // 3. Prevent small files from being inlined as Base64 (improves caching)
    assetsInlineLimit: 0, 
    chunkSizeWarningLimit: 600,
  },
})