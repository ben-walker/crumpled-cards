const state = {
  connected: false
}

const getters = {}

const actions = {}

const mutations = {
  SOCKET_CONNECT: (state) => {
    state.connected = true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
