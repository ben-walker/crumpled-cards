<template lang="pug">
  #signupForm
    form(@submit.prevent="submit" novalidate)

      b-field(label="Username"
      :type="fieldType('username')"
      :message="validation.firstError('username')")
        b-input(v-model.trim="username" type="text" rounded ref="username")

      b-field(label="Email"
      :type="fieldType('email')"
      :message="validation.firstError('email')")
        b-input(v-model.trim="email" type="text" rounded)

      b-field(label="Password"
      :type="fieldType('password')"
      :message="validation.firstError('password')")
        b-input(v-model="password" type="password" placeholder="••••••••" rounded password-reveal)

      b-field(label="Confirm Password"
      :type="fieldType('confirmPassword')"
      :message="validation.firstError('confirmPassword')")
        b-input(v-model="confirmPassword" type="password" placeholder="••••••••" rounded password-reveal)

      .has-text-right
        button.button.is-light(type="submit") Sign Up
</template>

<script>
import SimpleVueValidator from 'simple-vue-validator'

const Validator = SimpleVueValidator.Validator

export default {
  name: 'signupForm',
  data () {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  computed: {
    authPayload () {
      return {
        username: this.username,
        email: this.email,
        password: this.password
      }
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
              .then(res => {
                res.data.userFound
                  ? resolve('Username taken.')
                  : resolve()
              })
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
              .then(res => {
                res.data.userFound
                  ? resolve('Email taken.')
                  : resolve()
              })
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
    submit () {
      this.$validate().then(success => {
        if (success) this.$emit('signup', this.authPayload)
      })
    },
    fieldType (field) {
      return this.validation.hasError(field) ? 'is-danger' : ''
    }
  },
  mounted () {
    this.$refs.username.focus()
  }
}
</script>
