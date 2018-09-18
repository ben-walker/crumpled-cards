import { httpProgress } from '@/config/axios'
import to from 'await-to-js'
import { POPULATE } from './mutations'

export default {
  async populate ({ commit, state }) {
    let [ err, res ] = await to(httpProgress.get('me'))
    if (err) throw err
    commit(POPULATE, res.data.user)
  },

  async uploadProfilePic ({ commit, dispatch }, formData) {
    const [ err ] = await to(httpProgress.post('profilePicture', formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    ))
    if (err) throw err
    dispatch('populate')
  }
}
