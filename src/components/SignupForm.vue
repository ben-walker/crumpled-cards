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

      .has-text-right
        button.button.is-light(type="submit") Sign Up
</template>

<script>
import SimpleVueValidator from 'simple-vue-validator'
import FieldType from '@/mixins/FieldType'

const Validator = SimpleVueValidator.Validator

export default {
  name: 'signupForm',
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  mixins: [
    FieldType
  ],
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
    username: {
      cache: true,
      debounce: 200,
      validator: function (value) {
        let test = Validator.value(value).required().minLength(4).maxLength(20)
        if (!test.hasImmediateError()) {
          test.custom(() => {
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
        return test
      }
    },
    email: {
      cache: true,
      debounce: 200,
      validator: function (value) {
        let test = Validator.value(value).required().email()
        if (!test.hasImmediateError()) {
          test.custom(() => {
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
        return test
      }
    },
    password: (value) => {
      return Validator.value(value).required().minLength(8)
    }
  },
  methods: {
    submit () {
      this.$validate().then(success => {
        if (success) this.$emit('signup', this.authPayload)
      })
    }
  },
  mounted () {
    this.$refs.username.focus()
  }
}
</script>
