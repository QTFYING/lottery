import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/home-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/about-view.vue'),
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('../pages/info-view.vue'),
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../pages/news-view.vue'),
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: () => import('../pages/schedule-view.vue'),
    },
    {
      path: '/live',
      name: 'live',
      component: () => import('../pages/live-view.vue'),
    },
  ],
})

export default router
