import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/all-home-version/CreativePortfolioTwo.vue";
import Preview from "../views/all-home-version/CreativePortfolioTwo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Preview",
    meta: {
      title: "Playmakers",
    },
    component: Preview,
  },
  {
    path: "*",
    name: NotFound,
    meta: {
      title: "Playmakers",
    },
    component: () => import("../views/all-home-version/CreativePortfolioTwo.vue"),
  },
];
const router = new VueRouter({
  mode: "history",
  routes,
});

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title =
      to.meta.title;
  }
});

export default router;
