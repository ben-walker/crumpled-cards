<template lang="pug">
  #login
    .box
      h2.subtitle.is-4.has-text-grey Welcome Back
      form(@submit.prevent="submit" novalidate)
        b-field(label="Username or Email")
          b-input(v-model.trim="identifier" type="text" rounded red="identifier")
        b-field(label="Password")
          b-input(v-model="password" type="password" placeholder="••••••••" rounded password-reveal)
        nav.level
          .level-left
            .level-item
              a(@click="forgotPassword") Forgot your password?
          .level-right
            .level-item
              button.button.is-light(type="submit") Log In
        p.is-size-7 Need an account? #[InternalLink(:link="signupLink")]
</template>

<script>
import InternalLink from '@/components/InternalLink.vue'

export default {
  name: 'login',
  data () {
    return {
      identifier: '',
      password: '',
      signupLink: { route: '/authenticate/signup', color: 'primary', text: 'Sign Up' }
    }
  },
  components: {
    InternalLink
  }
}
</script>
