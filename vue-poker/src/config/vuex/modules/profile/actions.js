import axios from '@/config/axios'
import to from 'await-to-js'
import { POPULATE, UPDATE_PROFILE_PIC } from './mutations'

export default {
  async populate ({ commit, state }) {
    let [ err, res ] = await to(axios.get('me'))
    if (err) throw err
    commit(POPULATE, res.data.user)

    ;[ err, res ] = await to(axios.get(`profilePictureByUsername/${state.username}`))
    if (err) throw err
    commit(UPDATE_PROFILE_PIC, res.data.id)
  },

  async uploadProfilePic ({ commit }, formData) {
    const [ err, res ] = await to(axios.post('profilePicture', formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    ))
    if (err) throw err
    commit(UPDATE_PROFILE_PIC, res.data.id)
  }
}
