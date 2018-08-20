import Vue from 'vue'
import Vuex from 'vuex'
import { user, socket } from './modules'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user,
    socket
  },
  plugins: [createPersistedState()],
  strict: debug
})
