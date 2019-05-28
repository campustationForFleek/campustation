import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Top from '@/components/Top'
import Info from '@/components/Info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/top',
      name: 'Top',
      component: Top
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
  ]
})
