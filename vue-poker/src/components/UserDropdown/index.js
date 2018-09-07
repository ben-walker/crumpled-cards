import { connect } from 'vuex-connect'
import userDropdown from './userDropdown.vue'

export default connect({
  gettersToProps: {
    username: 'user/profile/username',
    email: 'user/profile/email'
  },

  methodsToEvents: {
    logOut ({ dispatch }) {
      dispatch('user/logOut')
      this.$router.push('/welcome')
    }
  }
})('userDropdown', userDropdown)
