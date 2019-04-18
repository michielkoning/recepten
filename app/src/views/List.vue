<template>
  <div class="home">
    <search-box
      :list="searchList"
      @search="search" />
    <categories />
    <h1>Recepten</h1>
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
      Er zijn geen recepten gevonden.
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
    }),

    recipes() {
      return this.$store.getters['recipes/filterByCategories'](
        this.selectedCategories,
        this.searchTerm,
      );
    },
  },

  mounted() {
    document.title = 'Overzicht | Recepten van Maaike & Michiel';
  },

  methods: {
    search(value) {
      this.searchTerm = value;
    },
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
