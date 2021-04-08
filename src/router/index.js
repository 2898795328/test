import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '/test',
  //   name: 'test',
  //   // 路由懒加载   >>只有当需要使用到这个页面的时候才加载这个页面（建议都是用路由懒加载）
  //   // 写法： component：()=>import("路径")
  //   component: () => import("../views/test.vue")
  // },
  {
    path: '/footeer',
    name:'footer',
    component:()=>import("../components/commonFooter.vue"),
    children:[
      {
        path:'/test',
        name:'test',
        component:()=>import("../views/test.vue")
      },
    ]
  },
  {
    path: '/header',
    name: 'header',
    component:()=>import('../components/commonHeader.vue'),
    children: [
      {
        path: '/about',
        name: 'about',
        component: () => import("../views/about.vue"),
        children:[
          {
            path:'/grandson',
            name:'grandson',
            component:()=>import("../views/grandson.vue"),
          }
        ]
      },
    ]
  },
  {
    path:'/dynamic',
    name:'dynamic',
    component:()=>import("../views/dynamic.vue"),
  }, 
  {
    path:'/common',
    name:'common',
    component:()=>import("../components/common.vue"),
  },
  {
    path:'/parent',
    name:'parent',
    component:()=>import("../views/子父组件/父组件.vue"),
  },
  {
    path:'/preprocessor',
    name:'preprocessor',
    component:()=>import("../views/preprocessor.vue"),
  },
  {
    path:'/axios',
    name:'axios',
    component:()=>import("../views/axios.vue"),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
