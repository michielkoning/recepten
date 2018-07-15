import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

Vue.config.productionTip = false;

axios.defaults.baseURL = 'http://localhost:8002/wp-json';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

