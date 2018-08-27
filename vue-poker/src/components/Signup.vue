<template lang="pug">
  #signup
    .box
      h2.subtitle.is-4.has-text-grey.is-unselectable Create Your Account
      form(@submit.prevent="submit" novalidate)
        form-group(:validator="$v.username" label="Username")
          b-input(
            :value="$v.username.$model"
            @input="debounceInput('username', $event)"
            v-focus
            :loading="$v.username.$pending"
            :disabled="loading"
          )
        form-group(:validator="$v.email" label="Email")
          b-input(
            :value="$v.email.$model"
            @input="debounceInput('email', $event)"
            :loading="$v.email.$pending"
            :disabled="loading"
          )
        form-group(:validator="$v.password" label="Password")
          b-input(
            v-model="$v.password.$model"
            type="password"
            placeholder="••••••••"
            password-reveal
            :disabled="loading"
            @focus="showPasswordStrength = true"
            @blur="showPasswordStrength = false"
          )
        transition(name="fade")
          PasswordStrengthMeter(v-if="showPasswordStrength" :password="password")
        .has-text-right
          button.button.is-light(type="submit" :class="{ 'is-loading': loading }") Sign Up
    p.is-unselectable Already have an account? #[InternalLink(:link="loginLink")]
</template>

<script>
import to from 'await-to-js'
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
import { minEntropy, unique } from '@/validators'
import InternalLink from '@/components/InternalLink.vue'
import PasswordStrengthMeter from '@/components/PasswordStrengthMeter.vue'
import { debounceInput, toast } from '@/mixins'

export default {
  name: 'signup',
  data () {
    return {
      username: '',
      email: '',
      password: '',
      loginLink: { route: '/authenticate/login', color: 'primary', text: 'Log In' },
      showPasswordStrength: false
    }
  },
  computed: {
    authPayload () {
      return {
        username: this.username,
        email: this.email,
        password: this.password
      }
    },
    loading () {
      return this.$store.state.user.loading
    }
  },
  components: {
    InternalLink,
    PasswordStrengthMeter
  },
  mixins: [
    validationMixin,
    debounceInput,
    toast
  ],
  validations () {
    return {
      username: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(20),
        unique: unique('username')
      },
      email: {
        required,
        email,
        unique: unique('email')
      },
      password: {
        required,
        minLength: minLength(8),
        minEntropy: minEntropy(40)
      }
    }
  },
  methods: {
    async submit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const [ err ] = await to(this.$store.dispatch('user/signUp', this.authPayload))
        if (err) return this.handleError(err)
        this.$router.push('/')
      }
    },
    handleError (err) {
      if (err.response) {
        switch (err.response.status) {
          case 422: // unprocessable
            this.dangerToast('User data is invalid')
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
