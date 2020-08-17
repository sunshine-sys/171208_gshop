import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import * as api from './api'
// Vue.prototype.$ajax = api

import axios from 'axios'

Vue.prototype.$ajax = axios

import qs from 'qs'
Vue.prototype.qs = qs  



Vue.config.productionTip = false

new Vue({
  // e1: '#app',
  render: h => h(App),
  router,
  store
}).$mount('#app')

