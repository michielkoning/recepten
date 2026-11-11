<script setup lang="ts">
import { CenterWrapper } from '@m11g/library'

const route = useRoute()
const { data } = await useAsyncData(route.path, () => queryCollection('recipes').path(route.path).first())

useSeoMeta({
  title: data.value?.title,
  description: data.value?.description,
})

definePageMeta({
  layout: {
    props: {
      showLink: true,
    },
  },
})
</script>

<template>
  <center-wrapper size="lg">
    <div
      v-if="data"
    >
      <div class="wrapper">
        <h1>{{ data.title }}</h1>

        <aside v-if="data.ingredients.length || data.groupedIngredients.length">
          <h2>Ingredienten</h2>
          <ul>
            <li
              v-for="item in data.groupedIngredients"
              :key="item.title"
            >
              <h3>{{ item.title }}</h3>
              <recipe-ingredients
                v-if="item.ingredients.length"
                :ingredients="item.ingredients"
              />
            </li>
          </ul>
          <recipe-ingredients
            v-if="data.ingredients.length"
            :ingredients="data.ingredients"
          />
        </aside>
        <recipe-preperation :recipe="data" />
      </div>
    </div>
    <div v-else>
      Recipe not found
    </div>
  </center-wrapper>
</template>

<style lang="css" scoped>
.wrapper {
  display: grid;
  column-gap: var(--spacing-4);

  @media (--lg) {
    &:has(aside) {
      grid-template-columns: 1fr 2fr;

      h1 {
        grid-column: span 3;
      }
    }
  }
}

ul {
  list-style: none outside;
}

li {
  margin-block-end: var(--spacing-6);
}
</style>
