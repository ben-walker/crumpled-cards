<template lang="pug">
  #signup
    .box
      h2.subtitle.is-4.has-text-grey Create Your Account
      form(@submit.prevent="submit" novalidate)
        form-group(:validator="$v.username" label="Username")
          b-input(:value="$v.username.$model" @input="debounceInput('username', $event)" rounded v-focus)
        form-group(:validator="$v.email" label="Email")
          b-input(:value="$v.email.$model" @input="debounceInput('email', $event)" rounded)
        form-group(:validator="$v.password" label="Password")
          b-input(v-model="password" @input="$v.password.$touch()" type="password" placeholder="••••••••" rounded password-reveal)
        .has-text-right
          button.button.is-light(type="submit") Sign Up
    p Already have an account? #[InternalLink(:link="loginLink")]
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
import InternalLink from '@/components/InternalLink.vue'
import _ from 'lodash'

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
    }
  },
  components: {
    InternalLink
  },
  mixins: [
    validationMixin
  ],
  validations: {
    username: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(20),
      unique (value) {
        if (value === '') return true
        return new Promise((resolve, reject) => {
          this.$http.get('usernameRegistered', {
            params: { username: value }
          })
            .then(res => resolve(!res.data.userFound))
            .catch(err => reject(err))
        })
      }
    },
    email: {
      required,
      email,
      unique (value) {
        if (value === '') return true
        return new Promise((resolve, reject) => {
          this.$http.get('emailRegistered', {
            params: { email: value }
          })
            .then(res => resolve(!res.data.userFound))
            .catch(err => reject(err))
        })
      }
    },
    password: {
      required,
      minLength: minLength(8)
    }
  },
  methods: {
    submit () {
      this.$v.$touch()
      if (!this.$v.$invalid) this.$emit('signup', this.authPayload)
    },
    debounceInput: _.debounce(function (model, value) {
      this.$v[model].$model = value
    }, 400)
  }
}
</script>
