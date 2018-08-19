import Vue from 'vue'
import io from 'socket.io-client'
import VueSocket from 'vue-socket.io'
import store from '@/config/vuex'

export const socketInstance = io(process.env.VUE_APP_SERVER as string)

Vue.use(VueSocket, socketInstance, store)
