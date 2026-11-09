<script setup lang="ts">

defineProps<{
  showLink?: boolean
}>()
</script>

<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<style lang="css" scoped>
header {
  position: sticky;
  inset-block-start: 0;
  z-index: 1;
  padding: var(--spacing-3) var(--spacing-4);
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
