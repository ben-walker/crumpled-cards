<template lang="pug">
  #resetForm
    form(@submit.prevent="submit" novalidate)

      b-field(label="Email"
      :type="fieldType('email')"
      :message="validation.firstError('email')")
        b-input(v-model.trim="email" type="text" rounded ref="email")

      .has-text-right
        button.button.is-light(type="submit") Send Reset Link
</template>

<script>
import SimpleVueValidator from 'simple-vue-validator'

const Validator = SimpleVueValidator.Validator

export default {
  name: 'resetForm',
  data () {
    return {
      email: ''
    }
  },
  validators: {
    email: (value) => {
      return Validator.value(value).required().email()
    }
  },
  methods: {
    submit () {
      this.$validate().then(success => {
        if (success) this.$emit('sendResetLink', this.email)
      })
    },
    fieldType (field) {
      return this.validation.hasError(field) ? 'is-danger' : ''
    }
  },
  mounted () {
    this.$refs.email.focus()
  }
}
</script>
