<script setup lang="ts">
const route = useRoute()
const { data } = await useAsyncData(() => queryCollection('recipes').path(route.path).first())

useSeoMeta({
  title: data.value?.title,
  description: data.value?.description,
})

definePageMeta({
  layout: {
    props: {
      showLink: true
    },
  },
})

</script>

<template>
  <div
    v-if="data"
  >
  <div class="wrapper">
    <h1>{{ data.title }}</h1>
    <aside v-if="data.ingredients.length">
      <h2>Ingredienten</h2>
      <ul>
        <li
          v-for="item in data.ingredients"
          :key="item"
        >
          {{ item }}
        </li>
      </ul>
    </aside>
    <div>
      <h2>Bereiding</h2>
      <content-renderer
        :value="data"
        :title="undefined"
        class="body"
      />
    </div>
    <!-- <v-chip-group>
        <v-chip
          v-if="data.category"
          :text="data.category"
        />
      </v-chip-group> -->
  </div>
  </div>
  <div v-else>
    Recipe not found
  </div>
</template>

<style lang="css" scoped>
.wrapper {
  display: grid;
  column-gap: var(--spacing-4);

  @media (--lg) {
    &:has(aside) {
      grid-template-columns: 1fr 3fr;

      h1 {
        grid-column: 2 / 3;
      }
    }
  }
}

li {
  margin-block-end: 0.25em;
}

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
