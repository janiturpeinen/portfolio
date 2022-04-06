import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutMeView from '../views/AboutMeView'
import ExperienceView from '@/views/ExperienceView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutMeView
  },
  {
    path: '/experience',
    name: 'experience',
    component: ExperienceView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
