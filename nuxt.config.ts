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

  devtools: {
    enabled: true,
    componentInspector: false
  },

  colorMode: {
    preference: 'dark',
  },

  compatibilityDate: '2024-09-10'
})
