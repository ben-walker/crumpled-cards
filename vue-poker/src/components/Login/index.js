import { connect } from 'vuex-connect'
import to from 'await-to-js'
import login from './login.vue'

export default connect({
  stateToProps: {
    loading: state => state.user.loading
  },

  methodsToEvents: {
    async logIn ({ dispatch }, credentials) {
      const [ err ] = await to(dispatch('user/authenticate', {
        endpoint: 'login',
        credentials
      }))
      err ? this.$emit('error', err) : this.$router.push('/')
    },

    forgot (identifier) {
      this.$dialog.alert({
        title: 'Instructions Sent',
        message: `Password reset instructions sent to <b>${identifier}</b>, check your inbox and spam folder.`
      })
    }
  }
})('login', login)
