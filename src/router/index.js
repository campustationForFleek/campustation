import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Top from '@/components/Top'
import Info from '@/components/Info'
import EntryForm from '@/components/EntryForm'

import LanguageIndex from '@/components/language/Index'
import HtmlIndex from '@/components/language/html/Index'
import CssIndex from '@/components/language/css/Index'

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
    },
    {
      path: '/language/',
      name: 'Language',
      component: LanguageIndex,
      children: [
        {
          path: '/html/',
          name: 'Html',
          component: HtmlIndex
        },
        {
          path: '/css/',
          name: 'Css',
          component: CssIndex
        }
      ]
    }
  ]
})
