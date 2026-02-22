import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  // Ensure base is absolute for hosting reliability
  base: '/',
  
  plugins: [
    react(),
    // Gzip compression for high-performance serving
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024, // Only compress assets larger than 1kb
      deleteOriginFile: false // Keep original for browsers that don't support gz
    }),
    // Visual map of bundle sizes
    visualizer({
      filename: 'bundle-stats.html',
      open: false, 
      gzipSize: true,
      template: 'treemap' 
    })
  ],

  build: {
    // SWITCH: Using esbuild instead of terser to prevent React 19 "blank screen" bugs
    target: 'esnext',
    minify: 'esbuild', 
    
    rollupOptions: {
      output: {
        // Optimized Code Splitting Strategy
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Group heavy motion library separately
            if (id.includes('framer-motion')) return 'vendor-motion';
            // Group UI icons
            if (id.includes('lucide-react')) return 'vendor-icons';
            // Everything else into core vendor chunk
            return 'vendor-core'; 
          }
        },
        // Ensure consistent naming for Cloudflare caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
    },

    // Ensure separate files for better CDN caching (max-age=31536000)
    assetsInlineLimit: 0, 
    chunkSizeWarningLimit: 800,
    sourcemap: false, // Disable for production to save space
  },

  // Performance: Optimize dependency pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react']
  }
})