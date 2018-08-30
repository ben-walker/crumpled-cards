import { connect } from 'vuex-connect'
import userAvatar from './userAvatar.vue'

export default connect({
  gettersToProps: {
    username: 'user/profile/username',
    profilePictureRef: 'user/profile/pictureRef'
  }
})('userAvatar', userAvatar)
