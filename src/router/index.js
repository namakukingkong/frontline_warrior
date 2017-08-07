import Vue from 'vue'
import Router from 'vue-router'
import pageExample from '@/pages/example'
import pageError from '@/pages/error'

Vue.use(Router)

export default new Router({
  mode  : 'history',
  routes: [
    {
      path     : '/',
      name     : 'page_example',
      component: pageExample
    },
    {
      path     : '/401',
      name     : 'page_401',
      component: pageError
    }
  ]
})
