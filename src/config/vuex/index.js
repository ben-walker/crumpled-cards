import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import socket from './modules/socket'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user,
    socket
  },
  strict: debug
})
