// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    'vuetify-nuxt-module',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',
  typescript: {
    typeCheck: true,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  vuetify: {
    // moduleOptions: {
    //   ssrClientHints: {
    //     prefersColorScheme: true,
    //     prefersColorSchemeOptions: {
    //       useBrowserThemeOnly: true,
    //       darkThemeName: 'dark',
    //       lightThemeName: 'light'
    //     }
    //   }
    // },
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark',
      },
    },
  },
})
