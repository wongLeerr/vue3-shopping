import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'
import Checkout from '@/views/Checkout/index.vue'
import Pay from '@/views/Pay/index.vue'
import PayBack from '@/views/Pay/PayBack.vue'
import Member from '@/views/Member/index.vue'
import MyOrder from '@/views/Member/components/MyOrder.vue'
import MyInfo from '@/views/Member/components/MyInfo.vue'
import { useUserStore } from '@/stores/user'

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
        {
          path: 'cartlist',
          name: 'cartlist',
          component:CartList
        },
        {
          path: 'checkout',
          name: 'checkout',
          component:Checkout
        },
        {
          path: 'pay/:id',
          name: 'pay',
          component:Pay
        },
        {
          path: 'paycallback',
          component:PayBack
        },
        {
          path: 'member',
          component: Member,
          children: [
            {
              path: '',
              component: MyInfo,
            },
            {
              path: 'order',
              component: MyOrder,
            }
          ]
        }
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

// 导航守卫鉴权
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  // 未登录
  if (!userStore.userInfo.token) {
    if (to.path === '/checkout' || to.path.slice(0, 4) === '/pay' || to.path.slice(0, 7) === '/member') {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
  
})

export default router
