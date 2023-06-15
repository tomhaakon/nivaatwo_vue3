import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import ResourcesView from "@/views/ResourcesView.vue";
import ProfileView from "@/views/ProfileView.vue";
import CardView from "@/views/CardView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homeview",
      component: HomeView,
    },

    {
      path: "/resources",
      name: "resources",
      component: ResourcesView,
    },
    {
      path: "/profile",
      name: "ProfileView",
      component: ProfileView,
    },
    {
      path: "/cards",
      name: "CardView",
      component: CardView,
    },
  ],
});

export default router;
