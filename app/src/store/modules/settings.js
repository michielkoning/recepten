const moduleState = {
  selectedCategories: [],
  totalEaters: 2,
};

const mutations = {
  setTotalEaters: (state, payload) => {
    const newState = state;
    newState.totalEaters = payload;
  },
  setSelectedCategories: (state, payload) => {
    const newState = state;
    newState.selectedCategories = payload;
  },
};

const actions = {
  setTotalEaters: ({ commit }, payload) => {
    commit('setTotalEaters', payload);
  },
  setSelectedCategories: ({ commit }, payload) => {
    commit('setSelectedCategories', payload);
  },
};

export default {
  state: moduleState,
  mutations,
  actions,
  namespaced: true,
};
