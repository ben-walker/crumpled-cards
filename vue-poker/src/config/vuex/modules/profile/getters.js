export default {
  id: state => state.id,
  username: state => state.username,
  email: state => state.email,
  picture: state => {
    if (!state.picture.img) return ''
    const encoding = btoa(String.fromCharCode.apply(null, state.picture.img.data))
    const { mimetype } = state.picture
    return `data:${mimetype};base64,${encoding}`
  }
}
