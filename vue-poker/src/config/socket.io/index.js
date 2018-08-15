import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
import store from '@/config/vuex'

Vue.use(VueSocketIO, process.env.VUE_APP_SERVER, store)
