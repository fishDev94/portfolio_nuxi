// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/robots"],
  devtools: { enabled: true },
  css: ["@/assets/styles/globals.scss", "primeicons/primeicons.css"],
  image: {
    provider: process.env.VERCEL_ENV ? "vercel" : "ipx",
  },
});
