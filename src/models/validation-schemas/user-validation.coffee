export default {
  username: {
    isLength: {
      options: { min: 4, max: 20 }
    },
    trim: true,
    escape: true
  },
  password: {
    isLength: {
      options: { min: 8 }
    }
  }
}
