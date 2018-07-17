export default {
  data () {
    return {
      identifier: '',
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    login (cb) {
      this.axios.post('login', {
        identifier: this.identifier,
        password: this.password
      })
        .then(() => cb(null))
        .catch(err => cb(err))
    },
    register (cb) {
      this.axios.post('register', {
        username: this.username,
        email: this.email,
        password: this.password
      })
        .then(() => cb(null))
        .catch(err => cb(err))
    }
  }
}
