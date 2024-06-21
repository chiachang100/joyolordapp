import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    redirect: '/tabs/scriptures'
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
        component: () => import('@/views/ArticlesPage.vue')
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
  },
  {
    path: '/scriptures/scripture/:id',
    component: () => import('@/views/DetailedScripturePage.vue')
  },
  {
    path: '/joys/article/:id',
    component: () => import('@/views/DetailedArticlePage.vue')
  },
  {
    path: '/firebase',
    component: () => import('@/views/FirebaseExpoPage.vue')
  },
  // {
  //   path: '/login',
  //   component: () => import('@/views/LoginPage.vue')
  // },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
