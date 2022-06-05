import Vue, { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import MaterialDashboard from "./material-dashboard";

import { defineRule } from "vee-validate";
import AllRules from "@vee-validate/rules";

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

const appInstance = createApp(App);

appInstance.config.devtools = true;

appInstance.use(store);
appInstance.use(router);
appInstance.use(MaterialDashboard);
appInstance.mount("#app");
