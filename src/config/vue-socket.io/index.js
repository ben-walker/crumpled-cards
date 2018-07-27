import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
import store from '@/config/vuex'

Vue.use(VueSocketIO, 'http://localhost:3000', store)
