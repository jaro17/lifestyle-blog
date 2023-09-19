import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "../views/AboutView.vue";
import SinglePostView from "../views/SinglePostView.vue";
import ContactView from "../views/ContactView.vue";
import ComingView from "../views/ComingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
      {
      path: '/single-post',
      name: 'singlepost',
      component: SinglePostView
    },
      {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/coming',
      name: 'coming',
      component: ComingView
    }
  ]
})

export default router
