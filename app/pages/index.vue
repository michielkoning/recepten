<script setup lang="ts">
const filters: Ref<string[]> = ref([])

const { data } = await useAsyncData('recipes', () => {
  if (filters.value.length) {
    return queryCollection('recipes')
      .where('category', 'IN', filters.value)
      .all()
  }
  else {
    return queryCollection('recipes')
      .all()
  }
}, {
  watch: [filters],
})

useSeoMeta({
  title: 'Recepten',
  description: 'Recepten',
})
</script>

<template>
  <div v-if="data">
    <!-- <app-category v-model="filters" /> -->
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
</style>