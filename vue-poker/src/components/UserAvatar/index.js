import { connect } from 'vuex-connect'
import userAvatar from './userAvatar.vue'

export default connect({
  gettersToProps: {
    username: 'user/profile/username',
    profilePicture: 'user/profile/picture'
  }
})('userAvatar', userAvatar)
