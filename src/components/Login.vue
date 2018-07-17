<template lang="pug">
  #login
    .box
      h1.subtitle.is-4.has-text-grey Welcome Back
      form(@submit.prevent novalidate)

        HelpText(dir="right" :msg="validation.firstError('identifier')")
        b-field(label="Username or Email" :type="determineFieldType('identifier')")
          b-input(v-model.trim="identifier" type="text" rounded ref="identifier")

        HelpText(dir="right" :msg="validation.firstError('password')")
        b-field(label="Password" :type="determineFieldType('password')")
          b-input(v-model="password" type="password" placeholder="••••••••" rounded password-reveal)

        .field
          b-checkbox(v-model="rememberMe") Remember me

        .has-text-right
          button.button.is-primary.is-outlined(type="submit") Log In

      b-loading(:is-full-page="false" :active.sync="loading")
</template>

<script>
import HelpText from '@/components/HelpText.vue'
import validation from '@/mixins/validation'

export default {
  name: 'login',
  mixins: [
    validation
  ],
  components: {
    HelpText
  },
  data () {
    return {
      identifier: '',
      password: '',
      rememberMe: false,
      loading: false
    }
  },
  mounted () {
    this.$refs.identifier.focus()
  }
}
</script>
