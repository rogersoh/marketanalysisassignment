import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";
import Assignment4 from "../views/Assignment4.vue";
import Assignment5 from "../views/Assignment5.vue";
import Assignment6 from "../views/Assignment6.vue";
import Project from "../views/Project.vue";
import Capstone from "../views/Capstone.vue";
import Covid19 from "../views/Covid.vue";
import ConsumerItemPrice from "../views/ConsumerItemPrice.vue";

const routes = [
  {
    path: "/",
    name: "Assignment 4",
    component: Assignment4,
    meta: {
      title: "Market Analytics Assignment 4",
    },
  },
  {
    path: "/Assignment5",
    component: Assignment5,
    meta: {
      title: "Market Analytics Assignment 5",
    },
  },
  {
    path: "/Assignment6",
    component: Assignment6,
    meta: {
      title: "Market Analytics Assignment 6",
    },
  },
  {
    path: "/Project",
    component: Project,
    meta: {
      title: "Market Analytics Project",
    },
  },
  {
    path: "/Capstone",
    component: Capstone,
    meta: {
      title: "Analytics Implementation Capstone Project",
    },
  },
  {
    path: "/Covid",
    component: Covid19,
    meta: {
      title: "Covid-19 situation",
    },
  },
  {
    path: "/ConsumerItemPrice",
    component: ConsumerItemPrice,
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
  console.log("router beforeEach");
  document.title = `${to.meta.title}`;
  next();
});

export default router;
