import { connect } from 'vuex-connect'
import to from 'await-to-js'
import userDropdown from './userDropdown.vue'

export default connect({
  gettersToProps: {
    username: 'user/username'
  },

  methodsToEvents: {
    async logOut ({ dispatch }) {
      const [ err ] = await to(dispatch('user/logOut'))
      if (!err) this.$router.push('/welcome')
    }
  }
})('userDropdown', userDropdown)
