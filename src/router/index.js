import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../views/Home.vue";
// @ts-ignore
import Food from "../views/Food.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  { path: "/food", name: "food", component: Food }
];

const router = new VueRouter({
  routes
});

export default router;
