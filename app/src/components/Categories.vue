<template>
  <fieldset>
    <legend class="sr-only">Categoriën</legend>
    <ul>
      <li
        v-for="category in categories"
        :key="category">
        <input
          :id="`category-${category}`"
          :value="category"
          v-model="selectedCategories"
          class="sr-only"
          type="checkbox"
        >
        <label :for="`category-${category}`" >{{ category }}</label>
      </li>
    </ul>
  </fieldset>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      categories: 'recipes/categories',
    }),
    selectedCategories: {
      get() {
        return this.$store.state.settings.selectedCategories;
      },
      set(value) {
        this.setCategories(value);
      },
    },
  },

  methods: {
    ...mapActions({
      setCategories: 'settings/setSelectedCategories',
    }),
  },
};
</script>

<style lang="postcss" scoped>
ul {
  margin: 0 -0.25rem 1em;
  display: flex;
  flex-wrap: wrap;
  list-style: none outside;
  padding-left: 0;
}

li {
  margin: 0 0.25rem 0.5rem;
}

label {
  padding: 0.25em 0.75em;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  border-radius: 1em;
  background: var(--white);
  transition: all 0.1s ease-out;

  &:hover {
    box-shadow: 0 0 0 1px var(--text-color);
  }
}

input:focus + label {
  box-shadow: 0 0 0 1px var(--text-color);
}

input:checked + label {
  background: var(--primary-color);
  color: var(--white);
}
</style>
