<template lang="pug">
  #login
    .box
      h1.subtitle.is-4.has-text-grey Welcome Back
      form(@submit.prevent="submit" novalidate)

        b-field(label="Username or Email"
        :type="determineFieldType('identifier')"
        :message="validation.firstError('identifier')")
          b-input(v-model.trim="identifier" type="text" rounded ref="identifier")

        b-field(label="Password"
        :type="determineFieldType('password')"
        :message="validation.firstError('password')")
          b-input(v-model="password" type="password" placeholder="••••••••" rounded password-reveal ref="password")

        .field
          b-checkbox(v-model="rememberMe") Remember me

        .has-text-right
          button.button.is-primary.is-outlined(type="submit") Log In
          a.help Forgot your password?

      b-loading(:is-full-page="false" :active.sync="loading")
</template>

<script>
import validation from '@/mixins/validation'

export default {
  name: 'login',
  mixins: [
    validation
  ],
  data () {
    return {
      identifier: '',
      password: '',
      rememberMe: false,
      loading: false
    }
  },
  methods: {
    submit () {
      this.validateForm((err) => {

      })
    }
  },
  mounted () {
    this.$refs.identifier.focus()
  }
}
</script>
