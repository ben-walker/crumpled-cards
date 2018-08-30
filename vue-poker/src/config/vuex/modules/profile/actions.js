import axios from '@/config/axios'
import to from 'await-to-js'
import { POPULATE } from './mutations'

export default {
  async populate ({ commit }) {
    const [ err, res ] = await to(axios.get('me'))
    if (err) throw err
    commit(POPULATE, res.data.user)
  },

  async uploadProfilePic ({ commit }, formData) {
    const [ err ] = await to(axios.post('profilePicture', formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    ))
    if (err) throw err
  }
}
