<template>
  <fieldset>
    <legend class="sr-only">Zoeken</legend>

    <div class="search-box" >
      <label
        class="sr-only"
        for="search">Zoek naar recepten:</label>
      <icon
        icon="search"
        title="Zoeken" />
      <input
        id="search"
        v-model="searchTerm"
        type="search"
        @keydown.esc="reset"
      >
      <button
        v-if="searchTerm.length"
        @click="reset">
        <icon
          :width="18"
          :height="18"
          icon="close"
          title="Zoeken"
        />
      </button>
    </div>
  </fieldset>
</template>

<script>
import Icon from '@/components/Icon.vue';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      searchTerm: '',
    };
  },
  watch: {
    searchTerm(value) {
      this.$emit('search', value);
    },
  },
  methods: {
    reset() {
      this.searchTerm = '';
    },
  },
};
</script>

<style lang="postcss" scoped>
.search-box {
  display: flex;
  padding: 0.25em 0.5em;
  margin-bottom: 1em;
  align-items: center;
  position: relative;
  border: 2px solid var(--black);
  background: var(--white);
  color: var(--gray);
  transition: all 0.2s ease-out;

  &:focus-within {
    outline: 1px solid var(--black);
    color: var(--black);
  }
}
</style>
