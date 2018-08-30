import { connect } from 'vuex-connect'
import to from 'await-to-js'
import profile from './profile.vue'

export default connect({
  gettersToProps: {
    username: 'user/username',
    email: 'user/email'
  },

  methodsToEvents: {
    async upload ({ dispatch }, files) {
      const formData = new FormData()
      formData.set('profilePicture', files[0])
      const [ err ] = await to(dispatch('user/uploadProfilePic', formData))
      if (err) throw err
    }
  }
})('profile', profile)
