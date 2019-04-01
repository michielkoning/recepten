<template>
  <div class="home">
    <autocomplete />
    <categories />
    <h1>Recepten</h1>
    <ul>
      <li
        v-for="recipe in recipes"
        :key="recipe.slug">
        <div class="image-wrapper" v-html="recipe.image" />
        <router-link
          :to="{ name: 'recipe', params: { slug: recipe.slug } }"
          >
          {{ recipe.title}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Autocomplete from '@/components/Autocomplete.vue';
import Categories from '@/components/Categories.vue';

export default {
  name: 'Home',
  data() {
    return {
      recipes: [],
    };
  },
  components: {
    Autocomplete,
    Categories,
  },
  computed: {
    ...mapState('settings', ['selectedCategories']),
  },

  mounted() {
    this.recipes = this.$store.state.recipes.recipes;
    document.title = 'Overzicht | Recepten van Maaike & Michiel';
  },

  watch: {
    selectedCategories() {
      this.recipes = this.$store.getters['recipes/filterByCategories'](
        this.selectedCategories,
      );
    },
  },

  methods: {
    ...mapActions({
      search: 'recipes/search',
    }),
  },
};
</script>

<style scoped>
ul {
  list-style: none outside;
  padding-left: 0;

  /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em; */
}

li {
  /* border: 1px solid black; */
}

a {
  /* display: block;
  padding: 0.5em; */
}
.image-wrapper {
  display: none;
  height: 8em;
  & >>> img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>
