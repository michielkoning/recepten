// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    'vuetify-nuxt-module',
    '@vite-pwa/nuxt',
  ],
  devtools: { enabled: true },
  experimental: {
    payloadExtraction: true,
  },

  compatibilityDate: '2025-07-15',
  nitro: {
    preset: 'netlify-static',
  },
  typescript: {
    typeCheck: true,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  pwa: {
    base: '/',
    client: {},
    strategies: 'generateSW',
    registerWebManifestInRouteRules: true,
    registerType: 'autoUpdate',
    workbox: {
      globPatterns: ['**/*.{js,css,woff2,html,wasm,txt}'],
    },
    manifest: {
      id: 'recepten',
      categories: ['food'],
      lang: 'nl',
      name: 'Recepten',
      orientation: 'portrait-primary',
      short_name: 'Recepten',
      edge_side_panel: {},
      dir: 'ltr',
      // display_override
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
