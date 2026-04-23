import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Using a relative base keeps the build friendlier for GitHub Pages deployments.
export default defineConfig({
  base: "./",
  plugins: [react()],
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.js$/,
    exclude: []
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx"
      }
    }
  }
});
