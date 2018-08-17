import Vue from 'vue'

const state = {
  authenticated: false,
  loading: false
}

const getters = {}

const actions = {
  signup ({ commit }, authPayload) {
    commit('startLoading')
    return new Promise((resolve, reject) => {
      Vue.axios.post('register', authPayload)
        .then(res => {
          commit('authenticate')
          resolve(res)
        })
        .catch(err => reject(err))
        .finally(() => commit('endLoading'))
    })
  },

  login ({ commit }, authPayload) {
    commit('startLoading')
    return new Promise((resolve, reject) => {
      Vue.axios.post('login', authPayload)
        .then(res => {
          commit('authenticate')
          resolve(res)
        })
        .catch(err => reject(err))
        .finally(() => commit('endLoading'))
    })
  },

  logout ({ commit }) {
    return new Promise((resolve, reject) => {
      Vue.axios.post('logout')
        .then(res => {
          commit('revokeAuth')
          resolve(res)
        })
        .catch(err => reject(err))
    })
  }
}

const mutations = {
  authenticate (state) {
    state.authenticated = true
  },

  revokeAuth (state) {
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
