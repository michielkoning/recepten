<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div>
    <nuxt-pwa-manifest />
    <nuxt-route-announcer />
    <header>
      {{ title }}
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style>
header {
  padding: var(--spacing-2) var(--spacing-4);
}

main {
  padding: var(--spacing-2) var(--spacing-4);
}
</style>
