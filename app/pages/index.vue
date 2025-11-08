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
</script>

<template>
  <div>
    <v-app-bar title="Recepten" />
    <template v-if="data">
      <app-category v-model="filters" />
      <v-list v-if="data?.length">
        <v-list-item
          v-for="item in data"
          :key="item.id"
          :to="item.path"
          :title="item.title"
          append-icon="mdi-chevron-right"
        />
      </v-list>
    </template>
  </div>
</template>
