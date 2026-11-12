// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    // '@nuxtjs/stylelint-module',
    '@vite-pwa/nuxt',
    '@nuxt/fonts',
  ],
  devtools: {
    enabled: true,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'nl',
      },
    },
  },
  css: ['~/assets/css/base.css'],
  content: {
    experimental: {
      sqliteConnector: 'native',
    },
  },
  compatibilityDate: '2025-07-15',
  vite: {
    optimizeDeps: {
      include: ['@m11g/library'],
    },
  },
  typescript: {
    typeCheck: true,
  },
  postcss: {
    plugins: {
      'postcss-custom-media-generator': {
        xs: 480,
        sm: 640,
        md: 768,
        lg: 1024,
        xlg: 1240,
      },
      'postcss-mixins': {
        mixinsDir: './app/assets/css/mixins/',
      },
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
  fonts: {
    defaults: {
      subsets: ['latin-ext', 'latin'],
    },
    families: [
      {
        weights: [400, 700],
        styles: ['normal'],
        name: 'Sora',
        provider: 'google',
        global: true,
      },
      {
        weights: [500],
        styles: ['normal'],
        name: 'Domine',
        provider: 'google',
        global: true,
      },
    ],
  },
  pwa: {
    base: '/',
    client: {},
    strategies: 'generateSW',
    registerWebManifestInRouteRules: true,
    registerType: 'autoUpdate',
    workbox: {
      globPatterns: [
        '**/*.{js,css,woff2,wasm}',
        '/index.html',
      ],
      runtimeCaching: [
        {
          urlPattern: ({ request }) => request.destination === 'document',
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'document',
            expiration: {
              maxEntries: 50,
              purgeOnQuotaError: true,
              maxAgeSeconds: 60 * 60 * 24,
            },
          },
        },
      ],
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
})
