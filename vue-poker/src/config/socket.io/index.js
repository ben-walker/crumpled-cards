import Vue from 'vue'
import io from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'
import store from '@/config/vuex'

const connectionOpts = {
  'force new connection': true,
  reconnectionAttempts: 'Infinity',
  timeout: 10000,
  transports: ['websocket']
}
export const socketInstance = io(process.env.VUE_APP_SERVER, connectionOpts)

Vue.use(new VueSocketIO({
  debug: process.env.NODE_ENV !== 'production',
  connection: socketInstance,
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
}))
