import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";
import Assignment4 from "../views/Assignment4.vue";
import Assignment6 from "../views/Assignment6.vue";

const routes = [
  {
    path: "/",
    name: "Assignment 4",
    component: Assignment4,
  },
  {
    path: "/Assignment6",
    component: Assignment6,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  /*   {
    path: "/",
    name: "Home",
    component: Home,
  }, */
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
