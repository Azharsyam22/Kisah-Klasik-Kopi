import process from "node:process";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  plugins: [react()],
  base: isProd ? "/Kisah-Klasik-Kopi/" : "/",
});
