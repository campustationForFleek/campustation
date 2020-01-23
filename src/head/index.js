import Vue from 'vue'
import VueHead from 'vue-head'

Vue.use(VueHead)

export default new VueHead({
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
