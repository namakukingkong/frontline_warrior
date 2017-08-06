import Vue from 'vue'
import Router from 'vue-router'
import pageExample from '@/pages/example'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path     : '/',
      name     : 'page_example',
      component: pageExample
    }
  ]
})
