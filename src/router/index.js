import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import UserGuide from '@/pages/UserGuide'
import Users from '@/pages/Users'
import Admin from '@/pages/Admin'
import Error from '@/pages/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/userguide',
      component: UserGuide
    },
    {
      path: '/users',
      component: Users
    },
    {
      path: '/admin',
      component: Admin
    },
    {
      path: '*',
      component: Error
    }
  ]
})
