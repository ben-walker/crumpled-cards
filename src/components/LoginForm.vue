<template lang="pug">
  #loginForm
    form(@submit.prevent="submit" novalidate)

      b-field(label="Username or Email Address"
      :type="fieldType('identifier')"
      :message="validation.firstError('identifier')")
        b-input(v-model.trim="identifier" type="text" rounded ref="identifier")

      b-field(label="Password"
      :type="fieldType('password')"
      :message="validation.firstError('password')")
        b-input(v-model="password" type="password" placeholder="••••••••" rounded password-reveal)

      nav.level
        .level-left
          .level-item
            a(@click="forgotPassword") Forgot Password?
        .level-right
          .level-item
            button.button.is-light(type="submit") Log In
</template>

<script>
import SimpleVueValidator from 'simple-vue-validator'

const Validator = SimpleVueValidator.Validator

export default {
  name: 'loginForm',
  data () {
    return {
      identifier: '',
      password: ''
    }
  },
  computed: {
    authPayload () {
      return {
        identifier: this.identifier,
        password: this.password
      }
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
      this.$validate().then(success => {
        if (success) this.$emit('login', this.authPayload)
      })
    },
    forgotPassword () {
      this.$validate('identifier').then(success => {
        if (success) this.$emit('forgotPassword', this.identifier)
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
