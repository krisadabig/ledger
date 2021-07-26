import Axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

let api_endpoint = "/json/data.json";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [],
  },

  getters: {
    records: (state) => state.data,
  },

  mutations: {
    fetch(state, { res }) {
      state.data = res.data;
    },
    add(state, { payload }) {
      state.data.unshift(payload);
    },
  },
  actions: {
    async fetchRecord({ commit }) {
      let res = await Axios.get(api_endpoint);
      commit("fetch", { res });
    },
    addRecord({ commit }, payload) {
      commit("add", { payload });
    },
  },
  modules: {},
});
