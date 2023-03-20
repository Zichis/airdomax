import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/website/HomeView.vue";
import WebsiteView from "../views/website/Website.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  {
    path: "/",
    component: WebsiteView,
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
      },
      {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/website/AboutView.vue"
          ),
      },
      {
        path: "/contact",
        name: "contact",
        component: () => import("../views/website/Contact.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
