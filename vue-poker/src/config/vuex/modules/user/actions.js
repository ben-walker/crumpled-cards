import axios from '@/config/axios'
import { AUTHENTICATE, REVOKE_AUTH, START_LOADING, STOP_LOADING } from './mutations'

export default {
  async signup ({ commit }, authPayload) {
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

  async login ({ commit }, authPayload) {
    commit(START_LOADING)
    return new Promise((resolve, reject) => {
      axios.post('login', authPayload)
        .then(res => {
          commit(AUTHENTICATE)
          resolve(res)
        })
        .catch(err => reject(err))
        .finally(() => commit(STOP_LOADING))
    })
  },

  async logout ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.post('logout')
        .then(res => {
          commit(REVOKE_AUTH)
          resolve(res)
        })
        .catch(err => reject(err))
    })
  },

  async getMe ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('me')
        .then(res => resolve(res.data.user))
        .catch(err => {
          if (err.response && err.response.status === 404) commit(REVOKE_AUTH)
          reject(err)
        })
    })
  }
}
