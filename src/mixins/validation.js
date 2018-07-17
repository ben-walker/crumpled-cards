import SimpleVueValidation from 'simple-vue-validator'
const Validator = SimpleVueValidation.Validator

export default {
  validators: {
    identifier: (value) => {
      return Validator.value(value).required()
    },
    username: (value) => {
      return Validator.value(value).required().minLength(4).maxLength(20)
    },
    email: (value) => {
      return Validator.value(value).required().email()
    },
    password: (value) => {
      return Validator.value(value).required().minLength(8)
    },
    'confirmPassword, password': (value, password) => {
      return Validator.value(value).required().match(password)
    }
  }
}
