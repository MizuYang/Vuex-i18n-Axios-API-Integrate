import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/VuexAPI.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/ShareStoreState.vue')
  },
  {
    path: '/axios',
    component: () => import('../views/AxiosView.vue'),
    children: [
      {
        path: 'weather',
        component: () => import('@/views/axios-item/WeatherAxios.vue')
      },
      {
        path: 'natural',
        component: () => import('@/views/axios-item/NaturalAxios.vue')
      }
    ]
  },
  {
    path: '/i18n',
    component: () => import('../views/I18nView.vue'),
    children: [
      {
        path: 'item1',
        component: () => import('@/views/i18n-item/I18nItem1.vue')
      },
      {
        path: 'item2',
        component: () => import('@/views/i18n-item/I18nItem2.vue')
      }
    ]
  }
  // { //* 代表所有主頁面下的頁面，路由錯誤都會被導向
  //   path: '/:pathMatch(.*)*',
  //   redirect: '/'
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.fullPath.match('/')) {
      return {
        top: 0 //* 切換頁面時會切換到最上面的位置
      }
    }
    return {}
  }
})

export default router
