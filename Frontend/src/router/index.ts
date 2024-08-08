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
      path: "/faq",
      name: "FAQ",
      component: () => import("../views/FAQ.vue"),
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () => import("../views/Portfolio.vue"),
    },
    {
      path: "/ba",
      name: "ba",
      component: () => import("../components/portfolio/Before-after.vue"),
    },
    {
      path: "/modal",
      name: "modal",
      component: () => import("../components/modal.vue"),
    },
  ],
})


export default router;
