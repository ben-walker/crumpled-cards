import axios from '@/config/axios'
import to from 'await-to-js'
import { AUTHENTICATE, START_LOADING, STOP_LOADING, POPULATE, RESET } from './mutations'

export default {
  async signUp ({ commit }, authPayload) {
    commit(START_LOADING)
    const [ err ] = await to(axios.post('signUp', authPayload))
    commit(STOP_LOADING)
    if (err) throw err
    commit(AUTHENTICATE)
  },

  async logIn ({ commit, dispatch }, authPayload) {
    commit(START_LOADING)
    const [ err ] = await to(axios.post('logIn', authPayload))
    if (err) {
      commit(STOP_LOADING)
      throw err
    }
    dispatch('populateUserData')
    commit(AUTHENTICATE)
    commit(STOP_LOADING)
  },

  async logOut ({ commit }) {
    commit(RESET)
    const [ err ] = await to(axios.post('logOut'))
    if (err) throw err
  },

  async authCheck ({ commit }) {
    const [ err ] = await to(axios.get('me'))
    if (err) commit(RESET)
  },

  async populateUserData ({ commit }) {
    const [ err, res ] = await to(axios.get('me'))
    if (err) return commit(RESET)
    commit(POPULATE, res.data.user)
  },

  async uploadProfilePic ({ commit }, formData) {
    const [ err ] = await to(axios.post('profilePicture', formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    ))
    if (err) throw err
  }
}
