import Vue from "vue";
import Router from "vue-router";
import RegisterPage from "./views/RegisterPage.vue";

Vue.use(Router);

const routes = [
  {
    path: "/register",
    name: "register",
    component: RegisterPage,
    alias: "/",
  },
];

const router = new Router({
  mode: "history",
  routes,
});

export default router;
