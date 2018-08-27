import axios from '@/config/axios'
import { AUTHENTICATE, REVOKE_AUTH, START_LOADING, STOP_LOADING } from './mutations'

export default {
  async signUp ({ commit }, authPayload) {
    commit(START_LOADING)
    return new Promise((resolve, reject) => {
      axios.post('register', authPayload)
        .then(res => {
          commit(AUTHENTICATE)
          resolve(res)
        })
        .catch(err => reject(err))
        .finally(() => commit(STOP_LOADING))
    })
  },

  async logIn ({ commit }, authPayload) {
    commit(START_LOADING)
    await axios.post('logIn', authPayload)
      .then(() => commit(AUTHENTICATE))
      .catch(err => { throw err })
      .finally(() => commit(STOP_LOADING))
  },

  async logOut ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.post('logOut')
        .then(res => {
          commit(REVOKE_AUTH)
          resolve(res)
        })
        .catch(err => reject(err))
    })
  },

  async checkAuth ({ commit }) {
    await axios.get('me')
      .catch(err => {
        if (err.response && err.response.status === 404) commit(REVOKE_AUTH)
      })
  }
}
