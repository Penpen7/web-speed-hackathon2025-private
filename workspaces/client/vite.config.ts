import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    target: "es2015",
    outDir: "dist",
    rollupOptions: {
      input: "./src/main.tsx",
      output: {
        chunkFileNames: "chunk-[hash].js",
        entryFileNames: "main.js",
        format: "es",
        dir: resolve(__dirname, "dist"),
      },
    },
  },
  plugins: [
    react(),
    // 環境変数を設定
    {
      name: "env",
      config: () => ({
        define: {
          "process.env.API_BASE_URL": JSON.stringify("/api"),
          "process.env.NODE_ENV": JSON.stringify("production"),
        },
      }),
    },
  ],
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"],
  },
});
