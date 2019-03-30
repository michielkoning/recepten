<template>
  <div class="home">
    <Autocomplete />
    <ul>
      <li
        v-for="recipe in recipes"
        :key="recipe.id">
        <router-link
          :to="{ name: 'recipe', params: { slug: recipe.slug } }"
          v-html="recipe.title" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Autocomplete from '@/components/Autocomplete.vue';

export default {
  name: 'Home',
  components: {
    Autocomplete,
  },
  computed: {
    ...mapState('recipes', ['recipes']),
  },
  methods: {
    ...mapActions({
      search: 'recipes/search',
    }),
  },
  created() {},
};
</script>
