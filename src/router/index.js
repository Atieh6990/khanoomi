import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import detail from '@/views/detail'
import login from '@/views/login'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail/:data',
    name: 'detail',
    component: detail
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

export default router
