// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/robots", "@nuxt/image"],
  devtools: { enabled: true },
  css: ["@/assets/styles/globals.scss", "primeicons/primeicons.css"],
});
