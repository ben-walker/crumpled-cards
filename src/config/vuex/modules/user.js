import http from '@/config/axios'

const state = {
  authenticated: false,
  authPending: false
}

const getters = {}

const actions = {
  login ({ commit }, authPayload) {
    commit('authenticating')
    return new Promise((resolve, reject) => {
      http.post('login', authPayload)
        .then(res => resolve(res))
        .catch(err => reject(err))
        .finally(() => commit('authComplete'))
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

const mutations = {
  authenticating (state) {
    state.authPending = true
  },

  authComplete (state) {
    state.authPending = false
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
