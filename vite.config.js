import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          vendor: ["axios", "framer-motion", "@tanstack/react-query"],
        },
      },
    },
    chunkSizeWarningLimit: 2000, 
  },
});
