import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loading: false,
  },
  mutations: {
    startLoading(state) {
      state.loading = true;
    },
    loadingFinished(state) {
      state.loading = false;
    },
  },
});

export default store;
