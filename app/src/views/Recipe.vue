<template>
  <div class="recipe">

    <div class="link">
      <router-link :to="{ name: 'home' }">Terug</router-link>
    </div>

    <h1>{{ recipe.title }}</h1>
    <aside>
      <div class="ingredients">
        <button
          @click="changeAmountofEaters(counter - 1)"
          :disabled="(counter <= 1)">-</button>
          {{ counter }}
        <button @click="changeAmountofEaters(counter + 1)">+</button>
        <template v-if="counter === 1">
          persoon
        </template>
        <template v-else>
          personen
        </template>

        <ul>
          <li
            v-for="(ingredient, index) in recipe.ingredients"
            :key="index">
            <template v-if="ingredient.amount">
              {{ ingredient.amount | formatAmount }}
            </template>
            {{ ingredient.title }}
          </li>
        </ul>
      </div>
      <div>
        <a
          v-if="recipe.preparation_time"
          :href="recipe.source"
          target="_blank"
          rel="noopener">
          Bron</a>
      </div>
      <div v-if="recipe.preparation_time">
        {{ recipe.preparation_time }} minuten
      </div>
      <div>
        <span
          v-for="(type, index) in recipe.types"
          :key="index">
          {{ type }}
        </span>
      </div>
    </aside>

    <div>
      <div
        v-if="recipe.preparation"
        v-html="recipe.preparation" />
      <div v-html="recipe.content" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

const formatter = new Intl.NumberFormat('nl-NL', {
  style: 'decimal',
  maximumFractionDigits: 2,
});

export default {
  data() {
    return {
      counter: 2,
      recipe: () => {},
    };
  },

  mounted() {
    this.getRecipe();
  },

  filters: {
    formatAmount(value) {
      return formatter.format(value);
    },
  },

  computed: {
    ...mapState('recipes', ['recipes', 'isLoading']),
    ingredients() {
      return this.recipe.ingredients;
    },
  },
  watch: {
    isLoading() {
      this.getRecipe();
    },
  },
  methods: {
    getRecipe() {
      if (!this.isLoading) {
        const { slug } = this.$route.params;
        this.recipe = this.$store.getters['recipes/getBySlug'](slug);
      }
    },
    changeAmountofEaters(counter) {
      this.counter = counter;
      this.updateIngredients();
    },
    updateIngredients() {
      this.recipe.ingredients.forEach((ingredient) => {
        if (ingredient.amount) {
          const newIngredient = ingredient;
          newIngredient.amount = this.counter * newIngredient.singleAmount;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.recipe {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 3fr;
}

.link {
  align-self: self-end;
  padding: 0;
}

a {
  padding: 0.25em 0;
  background: #fff;
  border-bottom-width: 0;
}

h1 {
  margin: 0;
  padding: 0;
}

p {
  margin: 0 0 1em;
}

ul {
  font-size: 1em;
  margin: 0 0 1em;
}

li {
  margin-bottom: 0.5em;
}

img {
  object-fit: cover;
  display: block;
  margin-bottom: 1em;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
}
</style>
