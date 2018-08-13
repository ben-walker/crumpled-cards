<template lang="pug">
  #signup
    .box
      h2.subtitle.is-4.has-text-grey Create Your Account
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
          )
        PasswordStrengthMeter(:password="password")
        .has-text-right
          button.button.is-light(type="submit" :class="{ 'is-loading': loading }") Sign Up
    p Already have an account? #[InternalLink(:link="loginLink")]
</template>

<script>
import { validationMixin } from 'vuelidate'
import { debounceInput, toast } from '@/mixins'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
import { unique } from '@/validators/async'
import InternalLink from '@/components/InternalLink.vue'
import PasswordStrengthMeter from '@/components/PasswordStrengthMeter.vue'

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
  validations: {
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
      minLength: minLength(8)
    }
  },
  methods: {
    submit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store.dispatch('user/signup', this.authPayload)
          .then(() => this.$router.push('/'))
          .catch(err => this.dangerToast(err))
      }
    }
  }
}
</script>
