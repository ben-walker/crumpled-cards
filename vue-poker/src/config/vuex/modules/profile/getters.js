export default {
  id: state => state.id,
  username: state => state.username,
  email: state => state.email,
  picture: state => {
    let encoding = btoa(String.fromCharCode.apply(null, state.picture.img.data))
    return `data:image/jpg;base64,${encoding}`
  }
}
