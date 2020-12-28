<template>
  <main class="center">
    <router-link to="/">Home</router-link> -
    <router-link to="/boodschappenlijst">boodschappenlijst</router-link>
    <router-view />
  </main>
</template>

<script>
import { provide, ref } from 'vue';
import useShoppingList from '@/compositions/useShoppingList';

export default {
  setup() {
    const totalEaters = ref(Number(localStorage.getItem('totalEaters')) || 4);
    const { list, updateList } = useShoppingList();
    const changeAmountofEaters = value => {
      totalEaters.value = value;
      localStorage.setItem('totalEaters', value);
    };

    provide('totalEaters', totalEaters);
    provide('shoppingList', list);
    provide('updateList', updateList);

    provide('changeAmountofEaters', changeAmountofEaters);
  },
};
</script>

<style lang="postcss">
@import './styles/app.css';
</style>
