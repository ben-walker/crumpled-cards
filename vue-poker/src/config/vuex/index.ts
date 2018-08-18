import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './types'
import { user, socket } from './modules'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const strict: boolean = process.env.NODE_ENV !== 'production'

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0'
  },
  modules: {
    user,
    socket
  },
  plugins: [
    createPersistedState()
  ],
  strict
}

export default new Vuex.Store<RootState>(store)
