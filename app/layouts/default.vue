<script setup lang="ts">
defineProps<{
  showLink?: boolean
}>()
</script>

<template>
  <div>
    <nuxt-pwa-manifest />
    <nuxt-route-announcer />
    <header>
      <center-wrapper>
        <nuxt-link v-if="showLink" to="/">Terug naar recepten</nuxt-link>
        <template v-else>Recepten</template>
      </center-wrapper>
    </header>
    <main>
      <center-wrapper>
        <slot />
      </center-wrapper>
    </main>
  </div>
</template>

<style>
header {
  position: sticky;
  inset-block-start: 0;
  z-index: 1;
  padding: var(--spacing-2) var(--spacing-4);
  font-size: var(--font-size-h4);
  line-height: var(--line-height-heading);
  background-color: var(--color-secondary);
  border-block-end: 1px solid currentcolor;
  transition: translate var(--transition);

  @container scroll-state(scrolled: bottom) {
    translate: 0 -100%;
  }

  @container scroll-state(scrolled: top) {
    translate: 0 0;
  }

  @media print {
    display: none;
  }
}

main {
  padding: var(--spacing-2) var(--spacing-4);
}
</style>
