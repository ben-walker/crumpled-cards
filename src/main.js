import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import SimpleVueValidation from 'simple-vue-validator'
import router from '@/config/vue-router'
import store from '@/config/vuex'
import http from '@/config/axios'
import logger from '@/config/vuejs-logger'
import promiseFinally from 'promise.prototype.finally'

import 'buefy/lib/buefy.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false
Vue.use(Buefy, { defaultIconPack: 'fas' })
Vue.use(SimpleVueValidation)
Vue.prototype.$http = http
promiseFinally.shim()

new Vue({
  router,
  store,
  logger,
  render: h => h(App)
}).$mount('#app')
