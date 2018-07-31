<template lang="pug">
  #signup
    .box
      h2.subtitle.is-4.has-text-grey Create Your Account
      form(@submit.prevent="submit" novalidate)
        b-field(label="Username")
          b-input(v-model.trim="username" type="text" rounded ref="username")
        b-field(label="Email")
          b-input(v-model.trim="email" type="text" rounded)
        b-field(label="Password")
          b-input(v-model="password" type="password" placeholder="••••••••" rounded password-reveal)
        .has-text-right
          button.button.is-light(type="submit") Sign Up
    p Already have an account? #[InternalLink(:link="loginLink")]
</template>

<script>
import SimpleVueValidator from 'simple-vue-validator'
import FieldType from '@/mixins/FieldType'
import InternalLink from '@/components/InternalLink.vue'

const Validator = SimpleVueValidator.Validator

export default {
  name: 'signup',
  data () {
    return {
      username: '',
      email: '',
      password: '',
      loginLink: { route: '/authenticate/login', color: 'primary', text: 'Log In' }
    }
  },
  components: {
    InternalLink
  }
}
</script>
