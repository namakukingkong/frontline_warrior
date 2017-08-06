// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import localforage from 'localforage'

import { App } from './pages'
import router from './router'
import store from './store'
import service from '@/services'
import mainjs from '@/assets/javascripts/main'

localforage.config({
  name: 'warrior' // project name
})

Vue.prototype.$storage = localforage
Vue.prototype.$service = service

/* eslint-disable no-new */
new Vue({
  el        : '#app',
  store,
  router,
  template  : '<App/>',
  components: {App}
})
