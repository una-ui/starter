// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@una-ui/nuxt',
  ],

  // default settings; you can remove this
  una: {
    prefix: 'N',
    themeable: true,
    global: true,
  },

  colorMode: {
    preference: 'dark',
  }
})
