import http from '@/config/axios'

const state = {
  authenticated: false,
  loading: false
}

const getters = {}

const actions = {
  signup ({ commit }, authPayload) {
    commit('authenticating')
    return new Promise((resolve, reject) => {
      http.post('register', authPayload)
        .then(res => {
          commit('authenticate')
          resolve(res)
        })
        .catch(err => reject(err))
        .finally(() => commit('authComplete'))
    })
  },

  login ({ commit }, authPayload) {
    commit('authenticating')
    return new Promise((resolve, reject) => {
      http.post('login', authPayload)
        .then(res => {
          commit('authenticate')
          resolve(res)
        })
        .catch(err => reject(err))
        .finally(() => commit('authComplete'))
    })
  },

  logout ({ commit }) {
    return new Promise((resolve, reject) => {
      http.post('logout')
        .then(res => resolve(res))
        .catch(err => reject(err))
        .finally(() => commit('revokeAuth'))
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

  authenticating (state) {
    state.loading = true
  },

  authComplete (state) {
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
