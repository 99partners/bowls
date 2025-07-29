import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
// Vite automatically loads .env files, no need for dotenv import

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: mode === 'development' ? 8081 : 8080,
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'https://api.99bowls.in',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path
      }
    }
  },
  define: {
    __API_URL__: JSON.stringify(process.env.VITE_API_URL),
    __ENV__: JSON.stringify(process.env.VITE_ENV)
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
