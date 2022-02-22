import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    name:'Login',
    component:() => import('../views/Login/index')
  },
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Index/index'),
    children:[
      { //首页
        path:'/home',
        name:'Home',
        component:() => import('../views/Home/index')
      },
      { //分类
        path:'/sort',
        name:'Sort',
        component:() => import('../views/Sort/index')
      },
      { //购物车
        path:'/shop',
        name:'Shop',
        component:() => import('../views/Shop/index')
      },
      { //个人中心
        path:'/user',
        name:'User',
        component:() => import('../views/User/index')
      },
    ]
  },
  { //详情页
    path:'/detailPage',
    name:'DetailPage',
    component:() => import('../views/DetailPage/index')
  },
  { //支付订单
    path:'/payOrder',
    name:'PayOrder',
    component:() => import('../views/PayOrder/index')
  }
]

const router = new VueRouter({
  routes
})

export default router
