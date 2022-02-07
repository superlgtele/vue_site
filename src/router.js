import { createWebHistory, createRouter } from "vue-router";
import About from "./components/About.vue";

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
    path: "/about",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
