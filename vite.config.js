import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Add this alias to point to the Bootstrap CSS file
      "bootstrap-css": path.resolve(
        __dirname,
        "node_modules/bootstrap/dist/css/bootstrap.min.css"
      ),
    },
  },
});
