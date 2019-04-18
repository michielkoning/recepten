import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import store from './store/store';
import './icons';
import i18n from './i18n';

Vue.config.productionTip = false;
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
