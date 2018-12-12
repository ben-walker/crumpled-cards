import { connect } from 'vuex-connect'
import to from 'await-to-js'
import profileModal from './profileModal.vue'

export default connect({
  gettersToProps: {
    username: 'user/profile/username',
    email: 'user/profile/email'
  },

  methodsToEvents: {
    async upload ({ dispatch }, file) {
      const formData = new FormData()
      formData.set('profilePicture', file)
      const [ err ] = await to(dispatch('user/profile/uploadProfilePic', formData))
      if (err) throw err
    },

    logOut ({ dispatch }) {
      this.$emit('close')
      dispatch('user/logOut')
      this.$router.push('/welcome')
    }
  }
})('profileModal', profileModal)
