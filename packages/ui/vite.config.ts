import { name } from "./package.json";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import { UserConfigExport } from "vite";
import dts from "vite-plugin-dts";

const app = async (): Promise<UserConfigExport> => {
  return defineConfig({
    plugins: [
      react(),
      dts({
        insertTypesEntry: true,
      }),
    ],
    css: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
    build: {
      outDir: "dist",
      lib: {
        entry: new URL("src/index.ts", import.meta.url).pathname,
        name,
        formats: ["es", "umd"],
        fileName: (format) => `${name}.${format}.js`,
      },
      rollupOptions: {
        external: ["react", "react-dom", "tailwindcss"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            tailwindcss: "tailwindcss",
          },
        },
      },
    },
  });
};
// https://vitejs.dev/config/
export default app;
