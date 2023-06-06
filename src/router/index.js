import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import newView from "@/views/NewView.vue";
import opg9View from "@/views/opg9View.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "opg9",
      component: opg9View,
    },
    {
      path: "/newview",
      name: "newview",
      component: newView,
    },
  ],
});

export default router;
