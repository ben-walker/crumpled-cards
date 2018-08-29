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

  async logIn ({ commit }, authPayload) {
    commit(START_LOADING)
    const [ err ] = await to(axios.post('logIn', authPayload))
    commit(STOP_LOADING)
    if (err) throw err
    commit(AUTHENTICATE)
  },

  async logOut ({ commit }) {
    const [ err ] = await to(axios.post('logOut'))
    if (err) throw err
    commit(RESET)
  },

  async getMe ({ commit }) {
    const [ err, res ] = await to(axios.get('me'))
    if (err) return commit(RESET)
    commit(POPULATE, res.data.user)
  },

  async uploadProfilePic ({ commit }, file) {
    const [ err ] = await to(axios.post('profilePicture', { file }))
    if (err) throw err
  }
}
