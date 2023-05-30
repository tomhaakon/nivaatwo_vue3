import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import newView from "@/views/NewView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/newview",
      name: "newview",
      component: newView,
    },
  ],
});

export default router;
