<template lang="pug">
  #login
    .box
      h1.subtitle.is-4.has-text-grey Welcome Back
      form(@submit.prevent="submit" novalidate)

        b-field(label="Username or Email"
        :type="fieldType('identifier')"
        :message="validation.firstError('identifier')")
          b-input.is-danger(v-model.trim="identifier" type="text" rounded ref="identifier")

        b-field(label="Password"
        :type="fieldType('password')"
        :message="validation.firstError('password')")
          b-input(v-model="password" type="password" placeholder="••••••••" rounded password-reveal ref="password")

        .field
          b-checkbox(v-model="rememberMe") Remember me

        .has-text-right
          div
            button.button.is-primary.is-outlined(type="submit") Log In
          div
            a.is-size-7 Forgot your password?

      b-loading(:is-full-page="true" :active.sync="loading")
</template>

<script>
import SimpleVueValidation from 'simple-vue-validator'

const Validator = SimpleVueValidation.Validator

export default {
  name: 'login',
  data () {
    return {
      identifier: '',
      password: '',
      rememberMe: false
    }
  },
  computed: {
    loading () {
      return this.$store.state.user.loading
    }
  },
  validators: {
    identifier: (value) => {
      return Validator.value(value).required()
    },
    password: (value) => {
      return Validator.value(value).required()
    }
  },
  methods: {
    submit () {
      this.$validate()
        .then((success) => {
          if (success) this.login()
        })
    },
    login () {
      const payload = {
        identifier: this.identifier,
        password: this.password
      }
      this.$store.dispatch('user/login', payload)
        .catch(this.danger('Credentials not recognized.'))
    },
    danger (message) {
      this.$toast.open({
        message: message,
        position: 'is-bottom',
        type: 'is-danger',
        queue: false
      })
    },
    fieldType (field) {
      return this.validation.hasError(field) ? 'is-danger' : ''
    }
  },
  mounted () {
    this.$refs.identifier.focus()
  }
}
</script>
