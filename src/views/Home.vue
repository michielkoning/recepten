<template>
  <div class="home">
    <categories v-model="selectedCategories" />
    <h1>{{ $t('list.title') }}</h1>
    <ul v-if="filterByCategories.length">
      <li v-for="recipe in filterByCategories" :key="recipe.slug">
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
import { inject, ref, computed } from 'vue';
import Categories from '@/components/Categories.vue';

export default {
  name: 'Home',
  components: {
    Categories,
  },
  setup() {
    const recipes = inject('recipes');
    const selectedCategories = ref([]);
    const filterByCategories = computed(() => {
      let filteredRecipes;
      if (selectedCategories.value.length > 0) {
        filteredRecipes = [];
        selectedCategories.value.forEach(category => {
          const recipesFromCategory = recipes.filter(
            recipe => recipe.type === category,
          );
          filteredRecipes = [...filteredRecipes, ...recipesFromCategory];
        });
        return filteredRecipes;
      }
      return recipes;
    });
    return {
      recipes,
      selectedCategories,
      filterByCategories,
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
