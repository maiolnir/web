import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

const BASENAME = process.env.VITE_BASENAME;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: BASENAME,
});
