<template>
  <div class="ingredients">
    <h2>{{ $t('details.ingredients') }}</h2>
    <ul>
      <li v-for="(ingredient, index) in ingredients" :key="index">
        <template v-if="ingredient.title">
          <span v-if="ingredient.amount">
            {{ $n(ingredient.amount, 'decimal') }}
          </span>
          {{ ingredient.title }}
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    ingredients: {
      type: Array,
      required: true,
    },
  },

  watch: {
    totalEaters() {
      this.updateIngredients();
    },
  },
  mounted() {
    this.updateIngredients();
  },
  methods: {
    updateIngredients() {
      this.ingredients.forEach(ingredient => {
        if (ingredient.amount) {
          const newIngredient = ingredient;
          newIngredient.amount = this.totalEaters * newIngredient.singleAmount;
        }
      });
    },
  },
};
</script>

<style lang="postcss" scoped>
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
