<template>
  <main class="center">
    <!-- <router-link to="/">Home</router-link> -
    <router-link to="/boodschappenlijst">boodschappenlijst</router-link> -->
    <router-view v-slot="{ Component }">
      <router-animation :direction="direction">
        <component :is="Component" />
      </router-animation>
    </router-view>
  </main>
</template>

<script>
import { provide, ref } from 'vue';
import useShoppingList from '@/compositions/useShoppingList';
import RouterAnimation from '@/components/RouterAnimation.vue';

export default {
  components: {
    RouterAnimation,
  },
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
  data() {
    return {
      direction: '',
      popStateDetected: false,
    };
  },
  watch: {
    // watch the `$route` to determine the transition to use
    $route(to) {
      // only animate by app navigation
      if (!this.popStateDetected) {
        const isListPage = to.name === 'Home';
        this.direction = isListPage ? 'left' : 'right';
      } else {
        this.direction = 'none';
      }
      this.popStateDetected = false;
    },
  },
  mounted() {
    // detect if user is using a back/forward button from the browser
    window.addEventListener('popstate', this.setPopState);
  },
  beforeUnmount() {
    window.removeEventListener('popstate', this.setPopState);
  },
  methods: {
    setPopState() {
      this.popStateDetected = true;
    },
  },
};
</script>

<style lang="postcss">
@import './styles/app.css';
</style>
