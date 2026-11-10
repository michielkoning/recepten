<script setup lang="ts">
import { CenterWrapper } from '@m11g/library'

const { data } = await useAsyncData('recipes', () => {
  return queryCollection('recipes')
    .all()
})

useSeoMeta({
  title: 'Recepten',
  description: 'Recepten',
})
</script>

<template>
  <center-wrapper
    v-if="data"
    size="md"
  >
    <ul v-if="data.length">
      <li
        v-for="item in data"
        :key="item.id"
      >
        <nuxt-link :to="item.path">
          {{ item.title }}
        </nuxt-link>
      </li>
    </ul>
  </center-wrapper>
</template>

<style lang="css" scoped>
ul {
  aspect-ratio: 1;
  padding-inline-start: 0;
  list-style: none outside;
}

a {
  display: block;
  padding-block: var(--spacing-2);
  text-decoration: none;
  border-block: 1px solid var(--color-subtle);

  &:hover {
    text-decoration: underline;
  }
}
</style>
