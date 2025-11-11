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
    <v-app-bar :title="data.title">
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
        <ul v-if="data.ingredients?.length">
          <li
            v-for="item in data.ingredients"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>
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
  counter-reset: preperation;
  margin: 0 0 2em;
  padding: 0;
}

:deep(p) {
  position: relative;
  padding: 0 0 1.25em 0;
  display: flex;
  gap: 0.75em;

  &::before {
    font-family: var(--font-family-headings);
    font-size: 1.75em;
    line-height: 1;
    transform: translateY(0.1em);
    counter-increment: preperation;
    content: counter(preperation);
  }
}
</style>
