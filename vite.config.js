import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@store",
        replacement: fileURLToPath(new URL("./src/store", import.meta.url)),
      },
      {
        find: "@router",
        replacement: fileURLToPath(new URL("./src/router", import.meta.url)),
      },
      {
        find: "@components",
        replacement: fileURLToPath(new URL("./src/components", import.meta.url)),
      },
    ],
  },
});
