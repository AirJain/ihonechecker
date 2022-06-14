import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      components: { default: () => import('../views/index/Index.vue') },
      meta: {
        title: "首页",
      },
    },
    {
      path: '/login',
      name: 'login',
      components: { default: () => import('../views/login/Login.vue') },
      meta: {
        title: "管理员登录",
      },
    },
    {
      path: '/userLogin',
      name: 'userLogin',
      components: { default: () => import('../views/login_user/LoginUser.vue') },
      meta: {
        title: "",
      },
    },
    {
      path: '/userIndex',
      name: 'userIndex',
      components: { default: () => import('../views/indexUser/IndexUser.vue') },
      meta: {
        title: "",
      },
    },
    
  ]
})
