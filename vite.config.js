import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  base: '/',
  
  // FIX: Explicitly treat woff2 as assets to prevent "Failed to decode" corruption
  assetsInclude: ['**/*.woff2'],

  plugins: [
    react(),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024,
      deleteOriginFile: false
    }),
    visualizer({
      filename: 'bundle-stats.html',
      open: false, 
      gzipSize: true,
      template: 'treemap' 
    })
  ],

  build: {
    target: 'esnext',
    minify: 'esbuild', 
    
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'vendor-motion';
            if (id.includes('lucide-react')) return 'vendor-icons';
            return 'vendor-core'; 
          }
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
    },

    // Performance: No inlining to ensure CDN/Cloudflare caching works 100%
    assetsInlineLimit: 0, 
    chunkSizeWarningLimit: 800,
    sourcemap: false,
  },

  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react']
  }
})