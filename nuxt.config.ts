// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    compileTemplate: true,
  },
  modules: ["@nuxtjs/robots", "@nuxt/image"],
  css: ["@/assets/styles/globals.scss", "primeicons/primeicons.css"],

  image: {
    provider: process.env.VERCEL_ENV ? "vercel" : "ipx",
    format: ["webp", "jpg"],
  },

  devtools: {
    enabled: true,
  },
});
