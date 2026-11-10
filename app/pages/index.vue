<script setup lang="ts">
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
  <div v-if="data">
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
  </div>
</template>

<style lang="css" scoped>
ul {
  padding-inline-start: 0;
  list-style: none outside;
}

li {
  padding-block-end: var(--spacing-1);
}
</style>
