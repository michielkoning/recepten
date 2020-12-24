<template>
  <fieldset>
    <legend class="sr-only">{{ $t('list.search') }}</legend>

    <div class="search-box">
      <label class="sr-only" for="search">{{
        $t('list.search-for-recipes')
      }}</label>
      <icon icon="search" />
      <input
        id="search"
        v-model="searchTerm"
        type="search"
        @input="change"
        @keydown.esc="reset"
      />
      <button v-if="searchTerm.length" @click="reset">
        <icon
          :width="18"
          :height="18"
          :title="$t('list.reset-search')"
          icon="close"
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
  methods: {
    change() {
      this.$emit('input', this.searchTerm);
    },
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
