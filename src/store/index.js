import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

var _foodApi = axios.create({
  baseURL: "https://trackapi.nutritionix.com/v2/natural/nutrients",
  timeout: 3000,
  headers: {
    "x-app-key": "0a30a00d248191dfe00c9572f8660ab6",
    "x-app-id": "41b58848"
  }
});
let _ourApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/jim",
  timeout: 3000
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logs: [],
    food: [],
    activeFood: {}
  },

  mutations: {
    getLogs(state, payload) {
      state.logs = payload;
    },
    addLog(state, payload) {
      state.logs.push(payload);
    },
    getFood(state, payload) {
      state.activeFood = payload;
    }
  },
  actions: {
    async createLog({ commit, dispatch }, log) {
      try {
        let res = await _ourApi.post("logs", log);
        commit("addLog", res.data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getLogs({ commit, dispatch }) {
      let res = await _ourApi.get("logs");
      commit("getLogs", res.data.data);
    },
    async getFood({ commit, dispatch }, food) {
      let res = await _foodApi.post("", food);
      commit("getFood", res.data);
    }
  },
  modules: {}
});
