import SimpleVueValidation from 'simple-vue-validator'

const Validator = SimpleVueValidation.Validator

export default {
  validators: {
    identifier: (value) => {
      return Validator.value(value).required()
    },
    username: function (value) {
      let validator = Validator.value(value).required().minLength(4).maxLength(20)
      if (!validator.hasImmediateError()) validator.custom(this.usernameTaken)
      return validator
    },
    email: function (value) {
      let validator = Validator.value(value).required().email()
      if (!validator.hasImmediateError()) validator.custom(this.emailTaken)
      return validator
    },
    password: (value) => {
      return Validator.value(value).required().minLength(8)
    },
    'confirmPassword, password': function (value, password) {
      return Validator.value(value).required().match(password)
    }
  },
  methods: {
    determineFieldType (fieldName) {
      return this.validation.hasError(fieldName) ? 'is-danger' : ''
    },
    validateForm (cb) {
      this.$validate(Object.keys(this.$refs))
        .then((success) => {
          if (success) cb(null)
          else cb(new Error('Form validation failed.'))
        })
    },
    usernameTaken () {
      return new Promise((resolve, reject) => {
        this.axios.get('usernameRegistered', {
          params: { username: this.username }
        })
          .then(res => {
            res.data.userFound ? resolve('Username in use.') : resolve()
          })
          .catch(err => reject(err))
      })
    },
    emailTaken () {
      return new Promise((resolve, reject) => {
        this.axios.get('emailRegistered', {
          params: { email: this.email }
        })
          .then(res => {
            res.data.userFound ? resolve('Email in use.') : resolve()
          })
          .catch(err => reject(err))
      })
    }
  }
}
