<script setup lang="ts">
defineProps<{
  ingredients: string[]
}>()
</script>

<template>
  <ul>
    <li
      v-for="ingredient in ingredients"
      :key="ingredient"
    >
      {{ ingredient }}
    </li>
  </ul>
</template>

<style lang="css" scoped>
ul {
  list-style: none outside;
}

li {
  margin-block-end: var(--spacing-2);
}
</style>
