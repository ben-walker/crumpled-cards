import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {

  },
  mutations: {

  },
  actions: {
    login ({ commit }, authPayload) {
      return new Promise((resolve, reject) => {
        http.post('login', authPayload)
          .then(res => resolve(res))
          .catch(err => reject(err))
      })
    },
    logout ({ commit }) {
      return new Promise((resolve, reject) => {
        http.post('logout')
          .then(res => resolve(res))
          .catch(err => reject(err))
      })
    }
  }
})
