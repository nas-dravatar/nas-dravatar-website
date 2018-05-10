import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import My from '@/components/My'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }
  ]
})
