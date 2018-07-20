<template lang="pug">
  #signup
    .box
      h1.subtitle.is-4.has-text-grey Create Your Account
      form(@submit.prevent="submit" novalidate)

        b-field(label="Username"
          :type="fieldType('username')"
          :message="validation.firstError('username')")
          b-input(v-model.trim="username" type="text" rounded ref="username")

        b-field(label="Email"
          :type="fieldType('email')"
          :message="validation.firstError('email')")
          b-input(v-model.trim="email" type="text" rounded ref="email")

        b-field(label="Password"
          :type="fieldType('password')"
          :message="validation.firstError('password')")
          b-input(v-model="password" type="password" placeholder="••••••••" rounded password-reveal ref="password")

        b-field(label="Confirm Password"
        :type="fieldType('confirmPassword')"
        :message="validation.firstError('confirmPassword')")
          b-input(v-model="confirmPassword" type="password" placeholder="••••••••" rounded password-reveal ref="confirmPassword")

        .has-text-right
          button.button.is-primary.is-outlined(type="submit") Sign Up

      b-loading(:is-full-page="false" :active.sync="loading")
</template>

<script>
import SimpleVueValidation from 'simple-vue-validator'

const Validator = SimpleVueValidation.Validator

export default {
  name: 'signup',
  data () {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      loading: false
    }
  },
  validators: {
    username: function (value) {
      let validator = Validator.value(value).required().minLength(4).maxLength(20)
      if (!validator.hasImmediateError()) {
        validator.custom(() => {
          return new Promise((resolve, reject) => {
            this.$http.get('usernameRegistered', {
              params: { username: this.username }
            })
              .then(res => { res.data.userFound ? resolve('Username taken.') : resolve() })
              .catch(err => reject(err))
          })
        })
      }
      return validator
    },
    email: function (value) {
      let validator = Validator.value(value).required().email()
      if (!validator.hasImmediateError()) {
        validator.custom(() => {
          return new Promise((resolve, reject) => {
            this.$http.get('emailRegistered', {
              params: { email: this.email }
            })
              .then(res => { res.data.userFound ? resolve('Email taken.') : resolve() })
              .catch(err => reject(err))
          })
        })
      }
      return validator
    },
    password: (value) => {
      return Validator.value(value).required().minLength(8)
    },
    'confirmPassword, password': (value, password) => {
      return Validator.value(value).required().match(password)
    }
  },
  methods: {
    submit () {},
    fieldType (field) {
      return this.validation.hasError(field) ? 'is-danger' : ''
    }
  },
  mounted () {
    this.$refs.username.focus()
  }
}
</script>
