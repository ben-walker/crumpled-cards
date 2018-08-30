export default {
  id: state => state.id,
  username: state => state.username,
  email: state => state.email,
  pictureRef: state => `${process.env.VUE_APP_API}profilePicture/${state.id}`
}
