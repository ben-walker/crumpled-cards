import { connect } from 'vuex-connect'
import userAvatar from './userAvatar.vue'

export default connect({
  stateToProps: {
    profilePictureUrl: state => `${process.env.VUE_APP_API}profilePicture/${state.user.profile.id}`
  },

  gettersToProps: {
    username: 'user/profile/username'
  }
})('userAvatar', userAvatar)
