<template>
  <div class="home">
    <Autocomplete />
    <ul>
      <li
        v-for="recipe in recipes"
        :key="recipe.id">
        <router-link
          :to="{ name: 'recipe', params: { slug: recipe.slug } }"
          v-html="recipe.title.rendered" />
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import Autocomplete from '@/components/Autocomplete.vue';

export default {
  name: 'Home',
  components: {
    Autocomplete,
  },
  data() {
    return {
      recipes: [],
    };
  },
  activated() {
    document.title = 'Recepten van Maaike & Michiel';
  },
  mounted() {
    document.title = 'Recepten van Maaike & Michiel';
    axios.get('/wp/v2/recipes', {
      params: {
        per_page: 99,
      },
    })
      .then((response) => {
        this.recipes = response.data;
      });
  },
};
</script>
