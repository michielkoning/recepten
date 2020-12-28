import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/boodschappenlijst',
    name: 'ShoppingList',
    component: () =>
      import(
        /* webpackChunkName: "ShoppingList" */ '../views/ShoppingList.vue'
      ),
    props: true,
  },
  {
    path: '/:slug',
    name: 'Recipe',
    props: true,
    component: () =>
      import(/* webpackChunkName: "recipe" */ '../views/Recipe.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
