import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Top from '@/components/Top'
import Info from '@/components/Info'
import EntryForm from '@/components/EntryForm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/top/',
      component: Top
    },
    {
      path: '/info/',
      component: Info
    },
    {
      path: '/entryform/',
      component: EntryForm
    }
  ]
})
