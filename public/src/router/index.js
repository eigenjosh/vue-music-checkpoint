import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import mytunes from '@/components/my-tunes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/mytunes',
      name: 'mytunes',
      component: mytunes
    }
  ]
})