export default {
  id: state => state.id,
  username: state => state.username,
  email: state => state.email,
  picture: state => {
    if (!state.picture.img) return ''
    let encoding = btoa(String.fromCharCode.apply(null, state.picture.img.data))
    return `data:image/jpg;base64,${encoding}`
  }
}
