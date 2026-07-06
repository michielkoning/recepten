<script setup lang="ts">
const route = useRoute()
const { data } = await useAsyncData(() => queryCollection('recipes').path(route.path).first())

useSeoMeta({
  title: data.value?.title,
  description: data.value?.description,
})
</script>

<template>
  <div v-if="data">
    <v-app-bar title="Recepten">
      <template #prepend>
        <v-toolbar-items>
          <v-btn
            icon="mdi-chevron-left"
            to="/"
          />
        </v-toolbar-items>
      </template>
    </v-app-bar>
    <v-row>
      <v-col
        cols="12"
        sm="3"
      >
        <div v-if="data.ingredients?.length">
          <h2>Ingredienten</h2>
          <ul class="ingredients">
            <li
              v-for="item in data.ingredients"
              :key="item"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="9"
      >
        <content-renderer
          :value="data"
          :title="undefined"
          class="body"
        />
        <v-chip-group>
          <v-chip
            v-if="data.category"
            :text="data.category"
          />
        </v-chip-group>
      </v-col>
    </v-row>
  </div>
  <div v-else>
    Recipe not found
  </div>
</template>

<style scoped>
.body {
  padding: 0;
  margin: 0 0 2em;
  counter-reset: preperation;
}

.ingredients {
  list-style: none outside;
}

li {
  margin-block-end: 0.25em;
}

:deep(p) {
  position: relative;
  display: flex;
  gap: 0.75em;
  padding: 0 0 1.25em;

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
