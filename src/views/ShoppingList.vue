<template>
  <div class="home">
    <h1>Boodschoppenlijst</h1>
    <ul v-if="shoppingList.length">
      <li v-for="item in shoppingList" :key="item.title">
        {{ item.amount }} {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  name: 'Home',
  setup() {
    const shoppingList = inject('shoppingList');
    return {
      shoppingList,
    };
  },
};
</script>

<style lang="postcss" scoped>
ul {
  list-style: none outside;
  padding-left: 0;
}

a {
  display: block;
}
</style>
