<template lang="pug">
  #signup
    .box
      h2.subtitle.is-4.has-text-grey-dark.is-unselectable Create Your Account
      form(@submit.prevent="submit" novalidate)
        form-group(:validator="$v.username" label="Username")
          b-input(
            :value="$v.username.$model"
            @input="vuelidateDebounce('username', $event)"
            v-focus
            :loading="$v.username.$pending"
            rounded
          )
        form-group(:validator="$v.email" label="Email")
          b-input(
            :value="$v.email.$model"
            @input="vuelidateDebounce('email', $event)"
            :loading="$v.email.$pending"
            rounded
          )
        form-group(:validator="$v.password" label="Password")
          b-input(
            v-model="$v.password.$model"
            type="password"
            placeholder="••••••••"
            rounded
          )
        password-strength-meter(:password="password")
        .has-text-right
          button.button.is-warning(type="submit" :disabled="loading")
            b-icon(pack="fas" icon="lock" size="is-small")
            span Sign Up
    p.is-unselectable Already have an account? #[router-link(:to="{ name: 'login' }") Log In]
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
import { minEntropy, unique } from '@/validators'
import { vuelidateDebounce } from '@/mixins'
import PasswordStrengthMeter from '@/components/PasswordStrengthMeter'

export default {
  name: 'signup',
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  props: {
    loading: {
      type: Boolean,
      required: true
    }
  },
  components: {
    PasswordStrengthMeter
  },
  mixins: [
    validationMixin,
    vuelidateDebounce
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
    submit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$emit('signUp', {
          username: this.username,
          email: this.email,
          password: this.password
        })
      }
    }
  }
}
</script>
