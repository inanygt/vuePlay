import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Timer from '../views/Timer.vue'

const routes = [
   {
      path: '/',
      name: 'home',
      component: Home
   },
   {
      path: '/timer',
      name: 'timer',
      component: Timer
   }
]

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes
})

export default router
