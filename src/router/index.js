import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Timer from '../views/Timer.vue'
import SignUp from '../views/SignUp.vue'

const routes = [
   {
      name: 'home',
      path: '/',
      component: Home
   },
   {
      name: 'timer',
      path: '/timer',
      component: Timer
   },
   {
      name: 'signup',
      path: '/signup',
      component: SignUp
   }
]

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes
})

export default router
