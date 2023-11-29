import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        expandProps: "end",
        replaceAttrValues: { "#000000": "hsl(70, 8%, 16%)" },
      },
    }),
  ],
});
