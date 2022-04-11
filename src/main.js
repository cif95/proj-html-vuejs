import Vue from "vue";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.config.productionTip = false;

// setting timeout function to see loader before compiling #app
setTimeout(function () {
  new Vue({
    render: (h) => h(App),
  }).$mount("#app");
}, 5000);
