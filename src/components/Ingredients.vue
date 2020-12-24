<template>
  <div class="ingredients">
    <h2>{{ $t('details.ingredients') }}</h2>
    <ul>
      <li v-for="(ingredient, index) in ingredientsForTotalEaters" :key="index">
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
import { computed, inject } from 'vue';

export default {
  props: {
    ingredients: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const totalEaters = inject('totalEaters');
    const ingredientsForTotalEaters = computed(() => {
      return props.ingredients.map(ingredient => {
        return {
          ...ingredient,
          amount: totalEaters.value * ingredient.singleAmount,
        };
      });
    });

    return {
      ingredientsForTotalEaters,
    };
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
