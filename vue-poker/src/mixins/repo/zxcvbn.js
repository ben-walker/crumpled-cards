import zxcvbnAsync from 'zxcvbn-async'

const zxcvbn = zxcvbnAsync.load({ sync: true })

export default {
  computed: {
    zxcvbnResult () {
      return zxcvbn(this.password)
    }
  }
}
