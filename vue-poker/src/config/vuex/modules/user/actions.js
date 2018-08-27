import axios from '@/config/axios'
import to from 'await-to-js'
import { AUTHENTICATE, REVOKE_AUTH, START_LOADING, STOP_LOADING } from './mutations'

export default {
  async signUp ({ commit }, authPayload) {
    commit(START_LOADING)
    const [ err ] = await to(axios.post('signUp', authPayload))
    if (err) throw err
    commit(AUTHENTICATE)
    commit(STOP_LOADING)
  },

  async logIn ({ commit }, authPayload) {
    commit(START_LOADING)
    const [ err ] = await to(axios.post('logIn', authPayload))
    if (err) throw err
    commit(AUTHENTICATE)
    commit(STOP_LOADING)
  },

  async logOut ({ commit }) {
    const [ err ] = await to(axios.post('logOut'))
    if (err) throw err
    commit(REVOKE_AUTH)
  },

  async checkAuth ({ commit }) {
    const [ err ] = await to(axios.get('me'))
    if (err) commit(REVOKE_AUTH)
  }
}
