<template>
  <fieldset>
    <legend class="sr-only">{{ $t('list.categories') }}</legend>
    <ul>
      <li v-for="category in categories" :key="category">
        <input
          :id="`category-${category}`"
          v-model="selectedCategories"
          :value="category"
          class="sr-only"
          type="checkbox"
        />
        <label :for="`category-${category}`">{{ category }}</label>
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
  border: 2px solid var(--black);
  color: var(--black);
  border-radius: 1em;
  background: var(--white);
  transition: all 0.1s ease-out;

  &:hover {
    box-shadow: 0 0 0 1px var(--black);
  }
}

input:focus + label {
  box-shadow: 0 0 0 1px var(--black);
}

input:checked + label {
  background: var(--black);
  color: var(--white);
}
</style>