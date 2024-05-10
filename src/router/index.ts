import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/joys'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/joys'
      },
      {
        path: 'joys',
        component: () => import('@/views/JoysPage.vue')
      },
      {
        path: 'scriptures',
        component: () => import('@/views/ScripturesPage.vue')
      },
      {
        path: 'settings',
        component: () => import('@/views/SettingsPage.vue')
      },
      {
        path: 'about',
        component: () => import('@/views/AboutPage.vue')
      },
      {
        path: 'rankinglist',
        component: () => import('@/views/RankingListPage.vue')
      },
      {
        path: 'newlist',
        component: () => import('@/views/NewListPage.vue')
      },
      {
        path: 'photos',
        component: () => import('@/views/PhotosPage.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
