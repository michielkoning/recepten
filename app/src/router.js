import Vue from 'vue';
import Router from 'vue-router';
import List from './views/List.vue';

const Recipe = () => import('./views/Recipe.vue');

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'list',
      component: List,
    },
    {
      path: '/:slug',
      name: 'recipe',
      component: Recipe,
      props: true,
    },
  ],
});

export default router;
