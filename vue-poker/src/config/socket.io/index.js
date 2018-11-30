import Vue from 'vue'
import io from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'
import store from '@/config/vuex'

export const socketInstance = io(process.env.VUE_APP_SERVER)

Vue.use(new VueSocketIO({
  debug: process.env.NODE_ENV !== 'production',
  connection: socketInstance,
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
}))
