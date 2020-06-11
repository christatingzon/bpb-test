import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import normalize from "normalize.css";
import 'normalize.css/normalize.css';

Vue.use(normalize);

Vue.config.productionTip = false;

Vue.filter('currency', function (value) {
    if (typeof value !== "number") {
        return value;
    }
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });
    return formatter.format(value);
});

new Vue({
  router,
  store,
  normalize,
  render: h => h(App)
}).$mount("#app");
