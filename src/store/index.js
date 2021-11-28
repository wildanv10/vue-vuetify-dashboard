import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: "dark",
    isDark: true,
  },
  mutations: {
    setTheme: (state, payload) => {
      state.theme = payload.theme;
      state.isDark = payload.isDark;
    },
  },
  actions: {
    setTheme: ({ commit }, payload) => {
      const isDark = payload;
      const theme = isDark ? "dark" : "light";
      commit("setTheme", { isDark, theme });
    },
  },
  modules: {},
});
