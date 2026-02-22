import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  base: '/',
  
  // 🛠️ Ensure Vite handles the font format correctly during build
  assetsInclude: ['**/*.woff2'], 

  server: {
    port: 5173,
    strictPort: true, 
    host: true,       
    hmr: {
      overlay: true,  
    },
  },

  plugins: [
    react(),
    compression({ algorithm: 'gzip', ext: '.gz' }),
    compression({ algorithm: 'brotliCompress', ext: '.br' }), 
    visualizer({
      filename: 'bundle-stats.html',
      gzipSize: true,
      template: 'treemap' 
    })
  ],

  build: {
    target: 'es2020', 
    minify: 'terser', 
    terserOptions: {
      compress: {
        drop_console: true, 
        drop_debugger: true
      }
    },
    
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'vendor-motion';
            if (id.includes('lucide-react')) return 'vendor-icons';
            if (id.includes('react') || id.includes('scheduler')) return 'vendor-react';
            return 'vendor-libs'; 
          }
        },
        // Using specific folders keeps your root clean
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        // This ensures your images/fonts stay in their expected extensions
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      },
    },

    assetsInlineLimit: 0, 
    chunkSizeWarningLimit: 1000, 
    sourcemap: false,
  },

  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react']
  }
})