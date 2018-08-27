import axios from '@/config/axios'
import { AUTHENTICATE, REVOKE_AUTH, START_LOADING, STOP_LOADING } from './mutations'

export default {
  async signUp ({ commit }, authPayload) {
    commit(START_LOADING)
    await axios.post('signUp', authPayload)
      .then(() => commit(AUTHENTICATE))
      .catch(err => { throw err })
      .finally(() => commit(STOP_LOADING))
  },

  async logIn ({ commit }, authPayload) {
    commit(START_LOADING)
    await axios.post('logIn', authPayload)
      .then(() => commit(AUTHENTICATE))
      .catch(err => { throw err })
      .finally(() => commit(STOP_LOADING))
  },

  async logOut ({ commit }) {
    await axios.post('logOut')
      .then(() => commit(REVOKE_AUTH))
      .catch(err => { throw err })
  },

  async checkAuth ({ commit }) {
    await axios.get('me')
      .catch(err => {
        if (err.response && err.response.status === 404) commit(REVOKE_AUTH)
        else throw err
      })
  }
}
