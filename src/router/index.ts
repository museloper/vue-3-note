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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/tutorial',
      name: 'tutorial',
      component: () => import('../views/TutorialView.vue')
    },
    {
      path: '/tutorial/01',
      name: 'tutorial01',
      component: () => import('../views/Tutorial01.vue')
    },
    {
      path: '/tutorial/02',
      name: 'tutorial02',
      component: () => import('../views/Tutorial02.vue')
    },
    {
      path: '/tutorial/03',
      name: 'tutorial03',
      component: () => import('../views/Tutorial03.vue')
    },
    {
      path: '/tutorial/04',
      name: 'tutorial04',
      component: () => import('../views/Tutorial04.vue')
    }
  ]
})

export default router
