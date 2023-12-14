import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Ensure that the output is not minified for easier debugging
    minify: false,
    // Set a base path if your app is not deployed at the root of the domain
    base: "./",
  },
});
