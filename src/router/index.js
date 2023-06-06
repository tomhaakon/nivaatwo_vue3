import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import newView from "@/views/NewView.vue";
import opg9View from "@/views/opg9View.vue";
import ResourcesView from "@/views/ResourcesView.vue";
import ProfileView from "@/views/ProfileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "opg9",
      component: opg9View,
    },
    {
      path: "/homeview",
      name: "homeview",
      component: HomeView,
    },
    {
      path: "/newview",
      name: "newview",
      component: newView,
    },
    {
      path: "/resources",
      name: "resources",
      component: ResourcesView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
  ],
});

export default router;
