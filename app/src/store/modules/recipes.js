const moduleState = {
  recipes: [],
};

const getters = {
  categories: state => [...new Set(state.recipes.map(item => item.type))],
  filterByCategories: state => (categories) => {
    if (categories.length > 0) {
      let recipes = [];
      categories.forEach((category) => {
        const recipesFromCategory = state.recipes.filter(
          recipe => recipe.type === category,
        );
        recipes = [...recipes, ...recipesFromCategory];
      });
      return recipes;
    }
    return state.recipes;
  },
  search: state => term => state.recipes.filter((recipe) => {
      const searchTerm = term.toLowerCase();
      return recipe.title.toLowerCase().includes(searchTerm);
    }),
  getBySlug: state => slug => state.recipes.find(recipe => recipe.slug === slug),
};

const mutations = {
  setAll: (state, payload) => {
    const newState = state;
    newState.recipes = payload;
  },
};

const actions = {
  setAll: ({ commit }, payload) => {
    commit('setAll', payload);
  },
};

export default {
  state: moduleState,
  getters,
  mutations,
  actions,
  namespaced: true,
};
