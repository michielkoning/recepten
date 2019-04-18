import Vue from 'vue';
import Vuex from 'vuex';
// import VuexPersist from 'vuex-persist';
import recipes from './modules/recipes';
import settings from './modules/settings';

Vue.use(Vuex);

// const vuexPersist = new VuexPersist({
//   key: 'recipes',
//   modules: ['recipes', 'settings'],
// });

export default new Vuex.Store({
  modules: {
    recipes,
    settings,
  },
  // plugins: [vuexPersist.plugin],
});
