<template lang="pug">
  #signup
    .box
      h1.subtitle.is-4.has-text-grey Create Your Account
      form(@submit.prevent="submit" novalidate)

        b-field(label="Username"
          :type="determineFieldType('username')"
          :message="validation.firstError('username')")
          b-input(v-model.trim="username" type="text" rounded ref="username")

        b-field(label="Email"
          :type="determineFieldType('email')"
          :message="validation.firstError('email')")
          b-input(v-model.trim="email" type="text" rounded ref="email")

        b-field(label="Password"
          :type="determineFieldType('password')"
          :message="validation.firstError('password')")
          b-input(v-model="password" type="password" placeholder="••••••••" rounded password-reveal ref="password")

        b-field(label="Confirm Password"
        :type="determineFieldType('confirmPassword')"
        :message="validation.firstError('confirmPassword')")
          b-input(v-model="confirmPassword" type="password" placeholder="••••••••" rounded password-reveal ref="confirmPassword")

        .has-text-right
          button.button.is-primary.is-outlined(type="submit") Sign Up

      b-loading(:is-full-page="false" :active.sync="loading")
</template>

<script>
import validation from '@/mixins/validation'

export default {
  name: 'signup',
  mixins: [
    validation
  ],
  data () {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
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
    this.$refs.username.focus()
  }
}
</script>
