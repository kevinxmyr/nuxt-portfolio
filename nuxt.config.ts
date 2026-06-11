import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01", // or similar date
  devtools: { enabled: true },
  srcDir: "src/",
  css: ["./app/assets/css/main.css"],
  vite: {
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit"],
    },
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    // Keys inside here are PRIVATE and only available on the server
    apiSecret: process.env.API_SECRET,

    // Keys inside "public" are available on both server AND client (browser)
    public: {
      publiko: "sicreto-publico", // Nuxt automatically populates this from NUXT_PUBLIC_API_BASE_URL
    },
  },

  modules: ["@nuxt/ui", "@nuxt/content", "@vueuse/motion/nuxt", "@nuxt/image", "@nuxt/fonts"],
});