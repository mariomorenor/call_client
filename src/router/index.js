import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/Login.vue";
import RemovedView from "../views/Removed.vue";
import ReloadView from "../views/Reload.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: LoginView,
    },
    {
      path: "/home",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/removed",
      name: "Removed",
      component: RemovedView,
    },
    {
      path: "/reload",
      name: "Reload",
      component: ReloadView,
    },
  ],
});

export default router;
