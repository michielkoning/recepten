<script setup lang="ts">
const { data } = await useAsyncData(() => {
  return queryCollection('recipes')
    .select('category')
    .where('category', 'IS NOT NULL')
    .order('category', 'ASC')
    .all()
})

const categories: ComputedRef<string[]> = computed(() => {
  if (!data.value) {
    return []
  }
  return data.value.reduce<string[]>((unique, item) => {
    return unique.includes(item.category) ? unique : [...unique, item.category]
  }, [])
})

const model = defineModel<string[]>({
  required: true,
})

const addToFilters = (value: string) => {
  const list = [...model.value]
  if (model.value.includes(value)) {
    model.value = list.filter(item => item !== value)
  }
  else {
    list.push(value)
    model.value = list
  }
}
</script>

<template>
  <v-chip-group v-if="categories.length">
    <v-chip
      v-for="item in categories"
      :key="item"
      :text="item"
      :variant="model.includes(item) ? 'elevated' : undefined"
      @click="addToFilters(item)"
    />
  </v-chip-group>
</template>
