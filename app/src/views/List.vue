<template>
  <div class="home">
    <search-box
      :list="searchList"
      v-model="searchTerm" />
    <categories />
    <h1>{{ $t('list.title') }}</h1>
    <ul v-if="recipes.length">
      <li
        v-for="recipe in recipes"
        :key="recipe.slug">
        <router-link
          :to="{ name: 'recipe', params: { slug: recipe.slug } }"
        >
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
import { mapState, mapGetters } from 'vuex';
import SearchBox from '@/components/SearchBox.vue';
import Categories from '@/components/Categories.vue';

export default {
  name: 'Home',
  components: {
    SearchBox,
    Categories,
  },
  data() {
    return {
      searchTerm: '',
    };
  },
  computed: {
    ...mapState('settings', ['selectedCategories']),
    ...mapGetters({
      searchList: 'recipes/searchList',
      filterByCategories: 'recipes/filterByCategories',
    }),

    recipes() {
      return this.filterByCategories(this.selectedCategories, this.searchTerm);
    },
  },

  mounted() {
    document.title = `${this.$t('list.pageTitle')}${this.$t('meta.pageTitle')}`;
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
