import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  base: '/',
  // REMOVED assetsInclude for woff2 - no longer needed with system fonts

  // 🛠️ Development Server Stability
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
    // Performance: Dual compression for modern hosting (like Cloudflare/Netlify)
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
        // 📦 Smart Chunking: Keeps your main entry file tiny for fast LCP
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'vendor-motion';
            if (id.includes('lucide-react')) return 'vendor-icons';
            if (id.includes('react') || id.includes('scheduler')) return 'vendor-react';
            return 'vendor-libs'; 
          }
        },
        // Clean asset structure
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
    },

    // ⚡ Performance: Forces files to be separate for better caching & parallel loading
    assetsInlineLimit: 0, 
    chunkSizeWarningLimit: 1000, 
    sourcemap: false,
  },

  optimizeDeps: {
    // Pre-bundles these to prevent dev-server "re-loading" jitters
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react']
  }
})