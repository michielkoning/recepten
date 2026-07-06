// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxtjs/stylelint-module',
    'vuetify-nuxt-module',
    '@vite-pwa/nuxt',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/base.css'],
  experimental: {
    payloadExtraction: true,
  },
  compatibilityDate: '2025-07-15',
  // nitro: {
  //   preset: 'netlify',
  // },
  typescript: {
    typeCheck: true,
  }, postcss: {
    plugins: {
      'postcss-custom-media-generator': {
        'xs': 480,
        'sm': 640,
        'md': 768,
        'lg': 1024,
        'xlg': 1240,
        '--navigation-md': '(width >= 960px)',
        '--navigation-lg': '(width >= 1024px)',
      },
      'postcss-mixins': {
        mixinsDir: './app/assets/css/mixins/',
      },
      'autoprefixer': false,
      'postcss-preset-env': {
        stage: false,
        features: {
          'nesting-rules': false,
          'custom-media-queries': true,
          'media-query-ranges': true,
        },
      },
      'cssnano': {},
    },
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
      globPatterns: ['**/*.{js,css,woff2}'],
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
