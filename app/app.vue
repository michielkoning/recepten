<template>
  <nuxt-layout>
    <nuxt-pwa-manifest />
    <nuxt-route-announcer />
    <v-app>
      <v-main>
        <v-container>
          <nuxt-page />
        </v-container>
      </v-main>
    </v-app>
  </nuxt-layout>
</template>
