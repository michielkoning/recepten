<template>
  <div class="home">
    <autocomplete />
    <categories />
    <h1>Recepten</h1>
       <transition-group name="list" tag="ul">
        <li
          v-for="recipe in recipes"
          :key="recipe.slug">
          <router-link
            :to="{ name: 'recipe', params: { slug: recipe.slug } }"
            >
            <div class="image-wrapper" v-html="recipe.image" />
            {{ recipe.title}}
          </router-link>
        </li>
      </transition-group>

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

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10em, 1fr));
  grid-gap: 1em;
}

a {
  display: block;
  &:hover >>> img {
    transform: scale(1.1);
  }
}

.image-wrapper {
  height: 8em;
  overflow: hidden;
  & >>> img {
    transition: 0.2s transform ease-out;
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>
