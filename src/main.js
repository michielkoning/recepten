import { createApp, readonly } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import i18n from './i18n';
import recipes from './data/recipes.json';

createApp(App)
  .use(router)
  .use(i18n)
  .provide('recipes', readonly(recipes))
  .mount('#app');

if ('registerProtocolHandler' in navigator) {
  navigator.registerProtocolHandler(
    'web+burger',
    'https://nifty-euclid-02bdec.netlify.app/?burger=%s',
    'Burger handler',
  );
}
