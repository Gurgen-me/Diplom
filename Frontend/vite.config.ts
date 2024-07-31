import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "http://localhost:3000/",
  css: {
    devSourcemap: true,
  },
  plugins: [vue()],
});
