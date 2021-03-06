import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import profile from '../profile'

export default {
  namespaced: true,
  state: state(),
  getters,
  actions,
  mutations,
  modules: {
    profile
  }
}
