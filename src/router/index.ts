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
      path: '/anime/:id',
      name: 'details',
      component: () => import('../views/DetailsView.vue')
    },
    {
      path: '/anime/favorite',
      name: 'favorite',
      component: () => import('../views/FavoriteView.vue')
    },
    {
      path: '/anime/tbw',
      name: 'TBW',
      component: () => import('../views/TbwView.vue')
    }
  ]
})

export default router
