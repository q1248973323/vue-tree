import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
Vue.config.productionTip = false;
axios.defaults.baseURL = "http://127.0.0.1:8888/";
Vue.prototype.$http = axios;
Vue.use(element)
new Vue({
  render: h => h(App)
}).$mount("#app");
