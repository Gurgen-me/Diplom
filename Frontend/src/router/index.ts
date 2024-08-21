import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () => import("../views/Portfolio.vue"),
    },
    {
      path: '/404',
      name: 'PageNotFound',
      component: () => import('../views/PageNotFound.vue'),
    },
    {
      path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
      redirect: '/404',
    },
  ],
})


export default router;
