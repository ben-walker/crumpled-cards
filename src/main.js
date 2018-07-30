import Vue from 'vue'
import App from './App.vue'
import SimpleVueValidation from 'simple-vue-validator'
import router from '@/config/vue-router'
import store from '@/config/vuex'
import http from '@/config/axios'
import '@/config/vuejs-logger'
import '@/config/buefy'
import '@/config/vue-lodash'
import '@/config/vue-socket.io'
import promiseFinally from 'promise.prototype.finally'

Vue.config.productionTip = false
Vue.use(SimpleVueValidation, { mode: 'manual' })

Vue.prototype.$http = http
Vue.prototype.$appName = 'Poker Nook'
promiseFinally.shim()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
