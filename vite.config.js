import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  base: '/',
  assetsInclude: ['**/*.woff2'],

  // FIX: Stability for Development Server
  server: {
    port: 5173,
    strictPort: true, // Prevents port jumping
    host: true,       // Exposes the project on your local network
    hmr: {
      overlay: true,  // Shows errors in browser to prevent silent crashes
    },
  },

  plugins: [
    react(),
    // Keep Brotli and Gzip for maximum performance
    compression({ algorithm: 'gzip', ext: '.gz' }),
    compression({ algorithm: 'brotliCompress', ext: '.br' }), 
    visualizer({
      filename: 'bundle-stats.html',
      gzipSize: true,
      template: 'treemap' 
    })
  ],

  build: {
    // Changing from 'esnext' to 'es2020' improves stability across environments
    target: 'es2020', 
    minify: 'terser', // Terser is slightly slower but produces smaller, more optimized code than esbuild
    terserOptions: {
      compress: {
        drop_console: true, // Cleans up logs for production
        drop_debugger: true
      }
    },
    
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Grouping by functionality helps with browser caching
            if (id.includes('framer-motion')) return 'vendor-motion';
            if (id.includes('lucide-react')) return 'vendor-icons';
            if (id.includes('react') || id.includes('scheduler')) return 'vendor-react';
            return 'vendor-libs'; 
          }
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
    },

    assetsInlineLimit: 0, 
    chunkSizeWarningLimit: 1000, // Raised slightly for vendor chunks
    sourcemap: false,
  },

  optimizeDeps: {
    // Ensure stable dependency pre-bundling
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react']
  }
})