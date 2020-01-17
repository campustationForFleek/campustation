import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index'
import Top from '@/components/top'
import Info from '@/components/info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/top',
      component: Top
    },
    {
      path: '/info',
      component: Info
    }
  ]
})
