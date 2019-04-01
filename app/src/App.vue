<template>
  <div id="app" v-if="!isLoading" class="center">
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      transitionName: '',
      isLoading: true,
    };
  },

  watch: {
    $route(to, from) {
      if (to.name === 'list' && from.name === 'recipe') {
        this.transitionName = 'slide-left';
      } else {
        this.transitionName = 'slide-right';
      }
    },
  },
  methods: {
    ...mapActions({
      setAll: 'recipes/setAll',
    }),
    async getRecipes() {
      try {
        const response = await axios.get('?rest_route=/recipes/v1/all');
        this.setAll(response.data);
      } catch (error) {
        window.console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.getRecipes();
  },
};
</script>


<style>
@import './styles/app.css';

@font-face {
  font-family: 'body';
  src: url('/fonts/CrimsonPro-Roman-VF.ttf') format('truetype');
  font-weight: 1 999;
}

@font-face {
  font-family: 'header';
  src: url('/fonts/MovementV.ttf') format('truetype');
  font-weight: 1 999;
}
</style>
