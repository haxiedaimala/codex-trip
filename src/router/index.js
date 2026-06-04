import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Spots from "../views/Spots.vue";
import SpotDetail from "../views/SpotDetail.vue";
import Routes from "../views/Routes.vue";
import RouteDetail from "../views/RouteDetail.vue";
import Tips from "../views/Tips.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/spots", name: "spots", component: Spots },
    { path: "/spots/:id", name: "spot-detail", component: SpotDetail, props: true },
    { path: "/routes", name: "routes", component: Routes },
    { path: "/routes/:id", name: "route-detail", component: RouteDetail, props: true },
    { path: "/tips", name: "tips", component: Tips }
  ],
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;
