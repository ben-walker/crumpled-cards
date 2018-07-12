import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import router from '@/config/router'
import store from '@/config/store'

import 'buefy/lib/buefy.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false
Vue.use(Buefy, { defaultIconPack: 'fas' })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
