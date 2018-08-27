<template lang="pug">
  #login
    .box
      h2.subtitle.is-4.has-text-grey.is-unselectable Welcome Back
      form(@submit.prevent="submit" novalidate)
        form-group(:validator="$v.identifier" label="Username or Email" attribute="Identifier")
          b-input(
            :value="$v.identifier.$model"
            @input="debounceInput('identifier', $event)"
            v-focus
            :loading="$v.identifier.$pending"
            :disabled="loading"
          )
        form-group(:validator="$v.password" label="Password" :messages="{ manualError: 'Password does not match' }")
          b-input(
            v-model="$v.password.$model"
            @input="passwordError = false"
            type="password"
            placeholder="••••••••"
            password-reveal
            :disabled="loading"
          )
        nav.level
          .level-left
            a.level-item.is-unselectable(@click="forgotPassword") Forgot your password?
          .level-right
            button.level-item.button.is-light(type="submit" :class="{ 'is-loading': loading }") Log In
    p.is-unselectable Need an account? #[InternalLink(:link="signupLink")]
</template>

<script>
import to from 'await-to-js'
import { validationMixin } from 'vuelidate'
import { debounceInput, toast } from '@/mixins'
import { required } from 'vuelidate/lib/validators'
import { userExists, manualError } from '@/validators'
import InternalLink from '@/components/InternalLink.vue'

export default {
  name: 'login',
  data () {
    return {
      identifier: '',
      password: '',
      signupLink: { route: '/authenticate/signup', color: 'primary', text: 'Sign Up' },
      passwordError: false
    }
  },
  computed: {
    authPayload () {
      return {
        identifier: this.identifier,
        password: this.password
      }
    },
    loading () {
      return this.$store.state.user.loading
    }
  },
  components: {
    InternalLink
  },
  mixins: [
    validationMixin,
    debounceInput,
    toast
  ],
  validations () {
    return {
      identifier: {
        required,
        userExists
      },
      password: {
        required,
        manualError: manualError(this.passwordError)
      }
    }
  },
  methods: {
    async submit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const [ err ] = await to(this.$store.dispatch('user/logIn', this.authPayload))
        if (err) return this.handleError(err)
        this.$router.push('/')
      }
    },
    forgotPassword () {
      this.$v.identifier.$touch()
      if (!this.$v.identifier.$invalid) this.$emit('forgotPassword', this.identifier)
    },
    handleError (err) {
      if (err.response) {
        switch (err.response.status) {
          case 401: // unauthorized
            this.passwordError = true
            break
          case 429: // rate limited
            this.dangerToast('Please try again later')
            break
          case 500: // internal server error
            this.dangerToast('Internal server error')
        }
      } else {
        this.dangerToast('Unexpected error')
      }
    }
  }
}
</script>
