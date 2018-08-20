import axios from '@/config/axios'
import { AUTHENTICATE, REVOKE_AUTH, START_LOADING, STOP_LOADING } from './mutations'

export default {
  signup ({ commit }, authPayload) {
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

  login ({ commit }, authPayload) {
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

  logout ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.post('logout')
        .then(res => {
          commit(REVOKE_AUTH)
          resolve(res)
        })
        .catch(err => reject(err))
    })
  }
}
