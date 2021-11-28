import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
const options = {
  theme: {
    themes: {
      light: {
        background: "#eaf0f5",
      },
      dark: {
        background: "#172138",
      },
    },
  },
};

Vue.use(Vuetify);

export default new Vuetify(options);
