import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueAxios from "vue-axios";
import axios from "axios";
import Vcalendar from "v-calendar";

import "./assets/css/tailwind.css";

Vue.use(VueAxios, axios);
Vue.use(Vcalendar);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
