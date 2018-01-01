import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import UserGuide from '@/pages/UserGuide'
import Admin from '@/pages/Admin'
import AddUser from '@/pages/AddUser'
import Error from '@/pages/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/userguide',
      name: 'User Guide',
      component: UserGuide
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/adduser',
      name: 'User Registration',
      component: AddUser
    },
    {
      path: '*',
      component: Error
    }
  ]
})
