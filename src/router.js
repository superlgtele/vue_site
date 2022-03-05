import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";

const routes = [
  //   {
  //     path: "/home",
  //     component: home.vue,
  //   },
  //   {
  //     path: "/shop",
  //     component: shop.vue,
  //   },
  {
    path: "/home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
