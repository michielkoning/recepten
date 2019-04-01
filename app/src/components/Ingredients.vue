<template>
  <div class="ingredients">
    <h2>Ingredienten</h2>
    <ul>
      <li
        v-for="(ingredient, index) in ingredients"
        :key="index">
        <template v-if="ingredient.title">
          <span v-if="ingredient.amount">
            {{ ingredient.amount | formatAmount }}
          </span>
          {{ ingredient.title }}
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue';
import { mapState } from 'vuex';

const formatter = new Intl.NumberFormat('nl-NL', {
  style: 'decimal',
  maximumFractionDigits: 2,
});

export default {
  components: {
    Icon,
  },
  props: {
    ingredients: {
      type: Array,
      required: true,
    },
  },

  computed: {
    ...mapState('settings', ['totalEaters']),
  },

  filters: {
    formatAmount(value) {
      return formatter.format(value);
    },
  },
  watch: {
    totalEaters() {
      this.updateIngredients();
    },
  },
  methods: {
    updateIngredients() {
      this.ingredients.forEach((ingredient) => {
        if (ingredient.amount) {
          const newIngredient = ingredient;
          newIngredient.amount = this.totalEaters * newIngredient.singleAmount;
        }
      });
    },
  },
  mounted() {
    this.updateIngredients();
  },
};
</script>

<style scoped>
h2 {
  padding-bottom: 0.5em;
}
ul {
  list-style: none outside;
  padding-left: 0;
  border-top: 1px dashed var(--black);
}

li {
  padding: 0.25em 0;
  border-bottom: 1px dashed var(--black);
}
</style>
