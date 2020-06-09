import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import normalize from "normalize.css";
import 'normalize.css/normalize.css';

Vue.use(normalize);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  normalize,
  render: h => h(App)
}).$mount("#app");
