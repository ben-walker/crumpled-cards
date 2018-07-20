import http from '@/config/axios'

const state = {
  authenticated: false
}

const getters = {}

const actions = {
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

const mutations = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
