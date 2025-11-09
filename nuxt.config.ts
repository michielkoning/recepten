// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    'vuetify-nuxt-module',
  ],
  devtools: { enabled: true },
  content: {
    experimental: {
      nativeSqlite: true,
    },
  },
  compatibilityDate: '2025-07-15',
  // nitro: {
  //   preset: 'netlify-static',
  // },
  typescript: {
    typeCheck: true,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark',
      },
    },
  },
})
