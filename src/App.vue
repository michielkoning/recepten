<template>
  <main class="center">
    <router-view />
  </main>
</template>

<script>
import { provide, ref } from 'vue';

export default {
  setup() {
    const totalEaters = ref(4);

    const changeAmountofEaters = value => {
      totalEaters.value = value;
    };

    provide('totalEaters', totalEaters);
    provide('changeAmountofEaters', changeAmountofEaters);
  },
};
</script>

<style lang="postcss">
@import './styles/app.css';
</style>
