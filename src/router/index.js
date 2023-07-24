import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name:'layout',
      component: Layout,
      children: [
        {
          path: '',
          name:'home',
          component: Home,
        },
        {
          path: 'category/:id',
          name:'category',
          component: Category,
        },
        {
          path: 'category/sub/:id',
          name:'sub',
          component: SubCategory,
        },
        {
          path: 'detail/:id',
          name: 'detail',
          component:Detail
        },
      ]
    },
    {
      path: '/login',
      name:'login',
      component:Login
    }
  ],
  // 每次切换页面，滚动条总是在最上面
  scrollBehavior() {
    return {
      top:0
    }
  }
})

export default router
