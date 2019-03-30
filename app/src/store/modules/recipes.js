import axios from 'axios';

const moduleState = {
  recipes: [],
  isLoading: true,
};

const getters = {
  search: state => term => state.recipes.filter(recipe => recipe.title.toLowerCase().includes(term.toLowerCase()),),
  getBySlug: state => slug => state.recipes.find(recipe => recipe.slug === slug),
};

const mutations = {
  setAll: (state, payload) => {
    const newState = state;
    newState.recipes = payload;
    newState.isLoading = false;
  },
  search: (state, payload) => {
    const newState = state;
    newState.recipes = newState.recipes.filter(recipe => recipe.title.includes(payload),);
  },
};

const actions = {
  setAll: async ({ commit }) => {
    try {
      const response = await axios.get('/recipes/v1/all');
      commit('setAll', response.data);
    } catch (error) {
      window.console.error(error);
    }
  },
  search: ({ commit }, payload) => {
    commit('search', payload);
  },
};

export default {
  state: moduleState,
  getters,
  mutations,
  actions,
  namespaced: true,
};
