<script setup lang="ts">
import type { RecipesCollectionItem } from '@nuxt/content'

defineProps<{
  recipe: RecipesCollectionItem
}>()
</script>

<template>
  <div>
    <h2>Bereiding</h2>
    <content-renderer
      :value="recipe"
      :title="undefined"
      class="body"
    />
  </div>
</template>

<style lang="css" scoped>
.body {
  counter-reset: preperation;
}

:deep(p) {
  position: relative;
  display: flex;
  gap: var(--spacing-3);
  padding: 0 0 var(--spacing-2);

  &::before {
    font-family: var(--font-family-headings);
    font-size: 1.75em;
    line-height: 1;
    content: counter(preperation);
    counter-increment: preperation;
    transform: translateY(0.1em);
  }
}
</style>
