<template lang="pug">
  #login
    .box
      h2.subtitle.is-4.has-text-grey Welcome Back
      form(@submit.prevent="submit" novalidate)
        form-group(:validator="$v.identifier" label="Username or Email" attribute="Identifier")
          b-input(v-model.trim="identifier" @input="$v.identifier.$touch()" type="text" rounded v-focus)
        form-group(:validator="$v.password" label="Password")
          b-input(v-model="password" @input="$v.password.$touch()" type="password" placeholder="••••••••" rounded)
        nav.level
          .level-left
            .level-item
              a(@click="forgotPassword") Forgot your password?
          .level-right
            .level-item
              button.button.is-light(type="submit") Log In
    p Need an account? #[InternalLink(:link="signupLink")]
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
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
  computed: {
    authPayload () {
      return {
        identifier: this.identifier,
        password: this.password
      }
    }
  },
  components: {
    InternalLink
  },
  mixins: [
    validationMixin
  ],
  validations: {
    identifier: {
      required,
      exists (value) {
        if (value === '') return true
        return new Promise((resolve, reject) => {
          this.$http.get('identifierExists', {
            params: { identifier: this.identifier }
          })
            .then(res => resolve(res.data.userFound))
            .catch(err => reject(err))
        })
      }
    },
    password: {
      required
    }
  },
  methods: {
    submit () {
      this.$v.$touch()
      if (!this.$v.$invalid) this.$emit('login', this.authPayload)
    },
    forgotPassword () {
      this.$v.identifier.$touch()
      if (!this.$v.identifier.$invalid) this.$emit('forgotPassword', this.identifier)
    }
  }
}
</script>
