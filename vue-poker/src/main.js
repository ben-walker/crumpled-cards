import Vue from 'vue'
import App from './App.vue'
import router from '@/config/vue-router'
import store from '@/config/vuex'
import '@/config/axios'
import '@/config/vuejs-logger'
import '@/config/buefy'
import '@/config/vue-socket.io'
import '@/config/css'
import '@/config/vuelidate-error-extractor'
import '@/directives'
import promiseFinally from 'promise.prototype.finally'

Vue.config.productionTip = false

Vue.prototype.$appName = 'Poker Nook'
promiseFinally.shim()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
