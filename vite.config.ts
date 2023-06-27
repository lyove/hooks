import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import { viteStaticCopy }  from "vite-plugin-static-copy";

const { resolve } = path;

// PackageName
const packageName = "hooks";

// Build files name
const buildFileName = {
  es: `${packageName}.js`,
  umd: `${packageName}.umd.js`,
  iife: `${packageName}.iife.js`,
};

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: "src/hooks.d.ts", dest: "./" },
      ]
    }),
  ],
  server: {
    port: 3030,
  },
  resolve: {
    alias: {
      "@/*": resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: packageName,
      formats: ["es", "umd", "iife"], 
      fileName: (format) => buildFileName[format],
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
