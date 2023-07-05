import { createRouter, createWebHistory } from 'vue-router'

import login from '@/views/Login.vue'
import home from '@/views/InitialAccess.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/InitialAccess.vue'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: "/createDataTable",
      name: "dataTable",
      component: () => import('@/components/DataTableCompany.vue')
    },
    {
      path: '/',
      redirect: '*'
    }
  ]
})
export default router
