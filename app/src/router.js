import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Recipe from './views/Recipe.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'sadsad',
      },
    },
    {
      path: '/:slug',
      name: 'recipe',
      component: Recipe,
      props: true,
    },
  ],
});
