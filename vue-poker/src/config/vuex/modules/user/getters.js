export default {
  authenticated: state => !!state.authenticated,
  username: state => state.data.username
    ? state.data.username
    : ''
}
