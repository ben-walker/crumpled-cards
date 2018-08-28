import Vue from 'vue'
import App from './App.vue'
import router from '@/config/router'
import store from '@/config/vuex'
import wait from '@/config/wait'
import '@/config/fontawesome'
import '@/config/logger'
import '@/config/buefy'
import '@/config/socket.io'
import '@/config/css'
import '@/config/vuelidate-error-extractor'
import '@/directives'

Vue.config.productionTip = false
Vue.prototype.$appName = 'Poker Nook'

new Vue({
  router,
  store,
  wait,
  render: h => h(App)
}).$mount('#app')
