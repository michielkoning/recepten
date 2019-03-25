<template>
  <div class="recipe">

    <div class="link">
      <router-link :to="{ name: 'home' }">Terug</router-link>
    </div>
    <h1
      v-html="
      recipe.title" />
    <div v-if="ingredients">
      <ul>
        <button @click="addPerson">{{ counter }} personen</button>
        <li
          v-for="(ingredient, index) in ingredients"
          :key="index">
          {{ ingredient.amount }}
          {{ ingredient.title }}
        </li>
      </ul>
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
    </div>
    <div>
      <div
        v-if="recipe.preparation"
        v-html="recipe.preparation" />
      <div v-html="recipe.content" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      counter: 2,
      recipe: () => {},
    };
  },

  mounted() {
    this.getRecipe();
  },
  computed: {
    ingredients() {
      if (!this.recipe.ingredients) return;
      return this.recipe.ingredients.map((ingredient) => {
        const amount = this.getAmountofIngredient(ingredient);
        return {
          title: ingredient.replace(amount, ''),
          amount,
          singleAmount: amount / 2,
        };
      });
    },
  },
  methods: {
    async getRecipe() {
      try {
        const response = await axios.get('/recipes/v1/recipe', {
          params: {
            slug: this.$route.params.slug,
          },
        });
        if (response.data) {
          this.recipe = response.data;
          document.title = this.recipe.title;
        } else {
          this.$router.push({ name: 'home' });
        }
      } catch (error) {
        window.console.error(error);
      }
    },
    getAmountofIngredient(string) {
      const regex = /[+-]?\d+(\.\d+)?/g;
      const amount = string.match(regex);
      if (amount) {
        return parseFloat(amount[0]);
      }
      return '';
    },
    addPerson() {
      this.counter += 1;
      this.ingredients.forEach((ingredient) => {
        const newIngredient = ingredient;
        if (newIngredient.amount) {
          newIngredient.amount += newIngredient.singleAmount;
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
