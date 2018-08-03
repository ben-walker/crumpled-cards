<template lang="pug">
  #signup
    .box
      h2.subtitle.is-4.has-text-grey Create Your Account
      form(@submit.prevent="submit" novalidate)
        b-field(label="Username")
          b-input(v-model.trim="username" type="text" rounded v-focus)
        b-field(label="Email")
          b-input(v-model.trim="email" type="text" rounded)
        b-field(label="Password")
          b-input(v-model="password" type="password" placeholder="••••••••" rounded password-reveal)
        .has-text-right
          button.button.is-light(type="submit") Sign Up
    p Already have an account? #[InternalLink(:link="loginLink")]
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
import InternalLink from '@/components/InternalLink.vue'

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
      maxLength: maxLength(20)
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(8)
    }
  },
  /* validators: {
    username: {
      cache: true,
      debounce: 200,
      validator: function (value) {
        let test = Validator.value(value).required().minLength(4).maxLength(20)
        if (!test.hasImmediateError()) {
          test.custom(() => {
            return new Promise((resolve, reject) => {
              this.$http.get('usernameRegistered', {
                params: { username: this.username }
              })
                .then(res => {
                  res.data.userFound
                    ? resolve('Username taken.')
                    : resolve()
                })
                .catch(err => reject(err))
            })
          })
        }
        return test
      }
    },
    email: {
      cache: true,
      debounce: 200,
      validator: function (value) {
        let test = Validator.value(value).required().email()
        if (!test.hasImmediateError()) {
          test.custom(() => {
            return new Promise((resolve, reject) => {
              this.$http.get('emailRegistered', {
                params: { email: this.email }
              })
                .then(res => {
                  res.data.userFound
                    ? resolve('Email taken.')
                    : resolve()
                })
                .catch(err => reject(err))
            })
          })
        }
        return test
      }
    },
    password: (value) => {
      return Validator.value(value).required().minLength(8)
    }
  }, */
  methods: {
    submit () {
      /* this.$validate().then(success => {
        if (success) this.$emit('signup', this.authPayload)
      }) */
    }
  }
}
</script>
