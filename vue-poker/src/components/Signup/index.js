import { connect } from 'vuex-connect'
import to from 'await-to-js'
import signup from './signup.vue'

export default connect({
  stateToProps: {
    loading: state => state.user.loading
  },

  methodsToEvents: {
    async signUp ({ dispatch }, credentials) {
      const [ err ] = await to(dispatch('user/authenticate', {
        endpoint: 'signUp',
        credentials
      }))
      err ? this.$emit('error', err) : this.$router.push('/')
    }
  }
})('signup', signup)
