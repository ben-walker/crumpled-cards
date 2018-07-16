import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import Buefy from 'buefy'
import router from '@/config/router'
import store from '@/config/store'

import 'buefy/lib/buefy.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false
Vue.use(Buefy, { defaultIconPack: 'fas' })
Vue.use(VueAxios, axios.create({ baseURL: 'http://localhost:3000/api/' }))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
