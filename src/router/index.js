import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import UserGuide from '@/pages/UserGuide'
import WhyUs from '@/pages/WhyUs'

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
      path: '/UserGuide',
      name: 'UserGuide',
      component: UserGuide
    },
    {
      path: '/WhyUs',
      name: 'WhyUs',
      component: WhyUs
    }
  ]
})
