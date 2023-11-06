// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true,
    typeCheck: true,
  },

  experimental: {
    typedPages: true,
  },

  devtools: { enabled: true },
  modules: [
    '@una-ui/nuxt',
  ],

  colorMode: {
    preference: 'dark',
  }
})
