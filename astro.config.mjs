// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config

const isBuild = process.env.NODE_ENV === "production";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  ...({
    site: "https://jonafinmicclen.github.io/voxcel-website",
    base: "/voxcel-website/",
    outDir: "./docs",
  }),
});