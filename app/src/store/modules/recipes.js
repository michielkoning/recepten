import axios from 'axios';

const moduleState = {
  list: [],
};

const getters = {
  categories: state => [...new Set(state.list.map(item => item.type))],
  filterByCategories: state => (categories, term) => {
    let recipes;
    if (categories.length > 0) {
      recipes = [];
      categories.forEach((category) => {
        const recipesFromCategory = state.list.filter(
          recipe => recipe.type === category,
        );
        recipes = [...recipes, ...recipesFromCategory];
      });
    } else {
      recipes = state.list;
    }
    const searchTerm = term.toLowerCase();
    return recipes.filter(recipe => recipe.title.toLowerCase().includes(searchTerm));
  },
  searchList: state => state.list.map(recipe => recipe.title),
  getBySlug: state => slug => state.list.find(recipe => recipe.slug === slug),
};

const mutations = {
  setAll: (state, payload) => {
    const newState = state;
    newState.list = payload;
  },
};

const actions = {
  setAll: async ({ commit }) => {
    try {
      const response = await axios.get('?rest_route=/recipes/v1/all');
      commit('setAll', response.data);
    } catch (error) {
      window.console.error(error);
    } finally {
      // this.isLoading = false;
    }
  },
};

export default {
  state: moduleState,
  getters,
  mutations,
  actions,
  namespaced: true,
};
