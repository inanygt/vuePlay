import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Timer from '../views/Timer.vue'
import SignUp from '../views/SignUp.vue'
import Games from '../views/games/Games.vue'
import GameDetails from '../views/games/GameDetails.vue'

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
      path: '/signup-form',
      component: SignUp
   },
   {
      name: 'games',
      path: '/games',
      component: Games
   },
   {
      name: 'gamedetails',
      path: '/gamedetails/:id',
      component: GameDetails
   },
]

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes
})

export default router
