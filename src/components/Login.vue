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

      b-loading(:is-full-page="false" :active.sync="loading")
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
      return this.$store.getters['user/authPending']
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
    submit () {},
    fieldType (field) {
      return this.validation.hasError(field) ? 'is-danger' : ''
    }
  },
  mounted () {
    this.$refs.identifier.focus()
  }
}
</script>
