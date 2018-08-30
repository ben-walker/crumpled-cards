import axios from '@/config/axios'
import to from 'await-to-js'
import { AUTHENTICATE, START_LOADING, STOP_LOADING } from './mutations'

export default {
  async authenticate ({ commit, dispatch }, payload) {
    commit(START_LOADING)
    const [ err ] = await to(axios.post(payload.endpoint, payload.credentials))
    if (err) {
      commit(STOP_LOADING)
      throw err
    }
    dispatch('profile/populate')
    commit(AUTHENTICATE)
    commit(STOP_LOADING)
  },

  async logOut ({ dispatch }) {
    dispatch('clearAll', null, { root: true })
    const [ err ] = await to(axios.post('logOut'))
    if (err) throw err
  },

  async authCheck ({ dispatch }) {
    const [ err ] = await to(axios.get('me'))
    if (err) dispatch('clearAll', null, { root: true })
  }
}
