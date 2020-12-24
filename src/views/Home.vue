<template>
  <div class="home">
    <categories />
    <h1>{{ $t('list.title') }}</h1>
    <ul v-if="recipes.length">
      <li v-for="recipe in recipes" :key="recipe.slug">
        <router-link :to="{ name: 'Recipe', params: { slug: recipe.slug } }">
          {{ recipe.title }}
        </router-link>
      </li>
    </ul>
    <p v-else>
      {{ $t('list.no-results') }}
    </p>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  name: 'Home',
  setup() {
    const recipes = inject('recipes');
    return {
      recipes,
    };
  },
};
</script>

<style lang="postcss" scoped>
ul {
  list-style: none outside;
  padding-left: 0;
}

a {
  display: block;
}
</style>
