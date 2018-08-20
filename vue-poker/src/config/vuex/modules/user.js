import Vue from 'vue'
import { AUTHENTICATE, REVOKE_AUTH } from '../mutations'
import axios from '@/config/axios'

const state = {
  authenticated: false,
  loading: false
}

const getters = {}

const actions = {
  signup ({ commit }, authPayload) {
    commit('startLoading')
    return new Promise((resolve, reject) => {
      axios.post('register', authPayload)
        .then(res => {
          commit(AUTHENTICATE)
          resolve(res)
        })
        .catch(err => reject(err))
        .finally(() => commit('endLoading'))
    })
  },

  login ({ commit }, authPayload) {
    commit('startLoading')
    return new Promise((resolve, reject) => {
      axios.post('login', authPayload)
        .then(res => {
          commit(AUTHENTICATE)
          resolve(res)
        })
        .catch(err => reject(err))
        .finally(() => commit('endLoading'))
    })
  },

  logout ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.post('logout')
        .then(res => {
          commit(REVOKE_AUTH)
          resolve(res)
        })
        .catch(err => reject(err))
    })
  }
}

const mutations = {
  [AUTHENTICATE] (state) {
    state.authenticated = true
  },

  [REVOKE_AUTH] (state) {
    state.authenticated = false
  },

  startLoading (state) {
    state.loading = true
  },

  endLoading (state) {
    state.loading = false
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
