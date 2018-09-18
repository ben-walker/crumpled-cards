import { httpProgress } from '@/config/axios'
import to from 'await-to-js'
import { POPULATE, UPDATE_PROFILE_PIC } from './mutations'

export default {
  async populate ({ commit, state }) {
    let [ err, res ] = await to(httpProgress.get('me'))
    if (err) throw err
    commit(POPULATE, res.data.user)
  },

  async uploadProfilePic ({ commit }, formData) {
    const [ err, res ] = await to(httpProgress.post('profilePicture', formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    ))
    if (err) throw err
    commit(UPDATE_PROFILE_PIC, res.data.id)
  }
}
