import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    // Compression for high performance serving
    compression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    // Generates a visual map of your bundle sizes
    visualizer({
      filename: 'bundle-stats.html',
      open: false, // Set to true if you want it to pop up after every build
      gzipSize: true,
      template: 'treemap' // Best for identifying large dependencies
    })
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        // Advanced Code Splitting Strategy
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'vendor-motion';
            if (id.includes('lucide-react')) return 'vendor-icons';
            if (id.includes('@formspree')) return 'vendor-forms';
            return 'vendor-core'; 
          }
        },
      },
    },
    // Ensure separate files for better caching/CDN performance
    assetsInlineLimit: 0, 
    chunkSizeWarningLimit: 600,
  },
})