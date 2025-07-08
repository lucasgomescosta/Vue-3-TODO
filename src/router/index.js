/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'

import LayoutLogin from '@/layouts/LayoutLogin.vue'
import DefaultLayout from '@/layouts/default.vue'

const manualRoutes = [
  {
    path: '/login',
    component: LayoutLogin,
    children: [
      {
        path: '',
        name: 'Login',
        component: import('@/pages/Login.vue'),
      }
    ]
  },
  {
    path: '/home',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: import('@/pages/Home.vue'),
      }
    ]
  },
  {
    path: '/about',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'about',
        component: import('@/pages/index.vue'),
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: manualRoutes,
})



export default router
