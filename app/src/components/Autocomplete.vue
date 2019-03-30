<template>
  <div class="autocomplete">
     <input
      v-model="searchTerm"
      type="search"
      @input="onChange"
      @keydown.down="onArrowDown"
      @keydown.up="onArrowUp"
      @keydown.enter="onEnter"
      @keydown.esc="reset"
    >
    <icon-base icon-name="calendar"><icon-calendar /></icon-base>
      <ul
        v-show="isOpen"
        id="autocomplete-results"
        class="autocomplete-results"
      >
        <li
          v-for="(result, index) in results"
          :key="result.slug"
          :class="{ 'is-active':index === arrowCounter }"
          class="autocomplete-result"
          @click="goToResultPage(result)"

        > {{result.title}}</li>
      </ul>
  </div>
</template>

<script>
import IconBase from './IconBase.vue';
import IconCalendar from './icons/IconCalendar.vue';

export default {
  name: 'Autocomplete',
  components: {
    IconBase,
    IconCalendar,
  },
  computed: {
    isOpen() {
      return this.results.length > 0 && this.searchTerm.length;
    },
  },
  data() {
    return {
      results: [],
      searchTerm: '',
      arrowCounter: 0,
    };
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    onChange() {
      if (this.searchTerm.length > 0) {
        this.results = this.$store.getters['recipes/search'](this.searchTerm);
      } else {
        this.reset();
      }
    },
    onArrowDown() {
      if (this.arrowCounter < this.results.length - 1) {
        this.arrowCounter += 1;
      } else {
        this.arrowCounter = 0;
      }
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter -= 1;
      } else {
        this.arrowCounter = this.results.length - 1;
      }
    },
    onEnter() {
      const result = this.results[this.arrowCounter];
      if (result) {
        this.goToResultPage(result);
      }
    },
    goToResultPage(result) {
      this.reset();
      this.$router.push({ name: 'recipe', params: { slug: result.slug } });
    },
    reset() {
      this.searchTerm = '';
      this.arrowCounter = -1;
    },
    handleClickOutside(evt) {
      if (!this.$el.contains(evt.target)) {
        this.reset();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.open-enter-active,
.open-leave-active {
  transition: all 0.2s;
}

.open-enter,
.open-leave-to {
  opacity: 0;
}

.flip-list-move {
  transition: transform 1s;
}

.autocomplete {
  display: flex;
  padding: 0.25em 0.5em;
  margin-bottom: 1em;
  align-items: center;
  position: relative;
  border: 2px solid var(--grey);

  &:focus-within {
    border-color: #000;
  }
}

input {
  border: 0;
  appearance: none;
  width: 100%;
  font-family: inherit;
  font-size: 1.25em;

  &:focus {
    outline: none;
  }
}

.autocomplete-results {
  margin: 0;
  border: 1px solid #000;
  position: absolute;
  background: white;
  top: 100%;
  left: -1px;
  right: -1px;
}

.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 0.25em 0.25em;
  cursor: pointer;
}

.autocomplete-result.is-active,
.autocomplete-result:hover {
  background-color: var(--primary-color);
  color: white;
}
</style>
