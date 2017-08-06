// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import localforage from 'localforage'

import { App } from './pages'
import router from './router'
import store from './store'
import service from '@/services'
import VueProgressBar from 'vue-progressbar'

localforage.config({
  name: 'warrior' // project name
})
Vue.use(VueProgressBar, {
  color      : '#00a5fa',
  failedColor: '#ff7260',
  thickness  : '2px',
  transition : {
    speed      : '0.5s',
    opacity    : '0.6s',
    termination: 300
  },
  autoRevert : true,
  location   : 'top',
  inverse    : false
})

Vue.prototype.$storage = localforage
Vue.prototype.$service = service

/* eslint-disable no-new */
new Vue({
  ...App,
  store,
  router
}).$mount('#app')

