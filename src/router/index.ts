import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/modules/auth/views/LoginView.vue'
import RegisterView from '@/modules/auth/views/RegisterView.vue'
import DashboardView from '@/modules/dashboard/views/DashboardView.vue'
import SChart from '@/modules/charts/SChart.vue'
import EChart from '@/modules/charts/EChart.vue'
import UserView from '@/modules/user/views/UserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { layout: 'empty' },
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: { layout: 'empty' },
    },
    {
      path: '/users',
      name: 'users',
      component: UserView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/s-chart',
      name: 's-chart',
      component: SChart,
    },
    {
      path: '/e-chart',
      name: 'e-chart',
      component: EChart,
    },
  ],
})

export default router
