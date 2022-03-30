import { createRouter, createWebHistory } from "vue-router";
/* import Home from "../views/Home.vue";
import Assignment4 from "../views/Assignment4.vue";
import Assignment5 from "../views/Assignment5.vue";
import Assignment6 from "../views/Assignment6.vue";
import Project from "../views/Project.vue";
import Capstone from "../views/Capstone.vue";
import Covid19 from "../views/Covid.vue"; */

const routes = [
  {
    path: "/",
    name: "Assignment 4",
    component: () =>
      import(/* webpackChunkName: "Assignment4" */ "../views/Assignment4.vue"),
    meta: {
      title: "Market Analytics Assignment 4",
    },
  },
  {
    path: "/Assignment5",
    name: "Assignment5",
    component: () =>
      import(/* webpackChunkName: "Assignment5" */ "../views/Assignment5.vue"),
    meta: {
      title: "Market Analytics Assignment 5",
    },
  },
  {
    path: "/Assignment6",
    name: "Assignment6",
    component: () =>
      import(/* webpackChunkName: "Assignment6" */ "../views/Assignment6.vue"),
    meta: {
      title: "Market Analytics Assignment 6",
    },
  },
  {
    path: "/Project",
    name: "Project",
    component: () =>
      import(/* webpackChunkName: "Project" */ "../views/Project.vue"),
    meta: {
      title: "Market Analytics Project",
    },
  },
  {
    path: "/Capstone",
    name: "Capstone Project",
    component: () =>
      import(/* webpackChunkName: "Capstone" */ "../views/Capstone.vue"),
    meta: {
      title: "Analytics Implementation Capstone Project",
    },
  },
  {
    path: "/Covid",
    name: "Covid",
    component: () =>
      import(/* webpackChunkName: "Covid" */ "../views/Covid.vue"),
    meta: {
      title: "Covid-19 situation",
    },
  },
  {
    path: "/ConsumerItemPrice",
    name: "Consumer Item Price",
    component: () =>
      import(
        /* webpackChunkName: "ConsumerItemPrice" */ "../views/ConsumerItemPrice.vue"
      ),
    meta: {
      title: "Consumer Item Price",
    },
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

router.beforeEach((to, from, next) => {
  console.log("router beforeEach", to.meta.title);
  document.title = `${to.meta.title}`;
  next();
});

export default router;
