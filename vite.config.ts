import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import viteCompression from "vite-plugin-compression";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        expandProps: "end",
        replaceAttrValues: { "#000000": "inherit" },
      },
    }),
    viteCompression(),
  ],
});
