<template lang="pug">
  #signup
    .box
      h1.subtitle.is-4.has-text-grey Create Your Account
      form(@submit.prevent novalidate)

        HelpText(dir="right" :msg="validation.firstError('username')")
        b-field(label="Username" :type="determineFieldType('username')")
          b-input(v-model.trim="username" type="text" rounded ref="username")

        HelpText(dir="right" :msg="validation.firstError('email')")
        b-field(label="Email" :type="determineFieldType('email')")
          b-input(v-model.trim="email" type="text" rounded)

        HelpText(dir="right" :msg="validation.firstError('password')")
        b-field(label="Password" :type="determineFieldType('password')")
          b-input(v-model="password" type="password" placeholder="••••••••" rounded password-reveal)

        HelpText(dir="right" :msg="validation.firstError('confirmPassword')")
        b-field(label="Confirm Password" :type="determineFieldType('confirmPassword')")
          b-input(v-model="confirmPassword" type="password" placeholder="••••••••" rounded password-reveal)

        .has-text-right
          button.button.is-primary.is-outlined(type="submit") Sign Up

      b-loading(:is-full-page="false" :active.sync="loading")
</template>

<script>
import HelpText from '@/components/HelpText.vue'
import validation from '@/mixins/validation'

export default {
  name: 'signup',
  mixins: [
    validation
  ],
  components: {
    HelpText
  },
  data () {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      loading: false
    }
  },
  mounted () {
    this.$refs.username.focus()
  }
}
</script>
