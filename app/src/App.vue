<template>
  <div
    v-if="list.length"
    id="app"
    class="center">

    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      transitionName: '',
    };
  },

  computed: {
    ...mapState('recipes', ['list']),
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
  mounted() {
    this.setAll();
  },
  methods: {
    ...mapActions({
      setAll: 'recipes/setAll',
    }),
  },
};
</script>


<style lang="postcss">
@import './styles/app.css';
</style>
