import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tutorial',
      name: 'tutorial',
      component: () => import('../views/TutorialView.vue')
    },
    {
      path: '/tutorial/:chapter',
      component: () => import('../views/TutorialSelector.vue')
    },
    {
      path: '/basic',
      name: 'basic',
      component: () => import('../views/BasicView.vue')
    },
    {
      path: '/basic/:chapter',
      component: () => import('../views/BasicSelector.vue')
    }
  ]
})

export default router
