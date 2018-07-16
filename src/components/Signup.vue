<template lang="pug">
  #signup
    .box
      form(@submit.prevent="processForm" novalidate)
        p.help.is-danger.is-pulled-right {{ validation.firstError('username') }}
        b-field(label="Username")
          b-input(v-model.trim="username" type="text" rounded ref="username")
        p.help.is-danger.is-pulled-right {{ validation.firstError('email') }}
        b-field(label="Email")
          b-input(v-model.trim="email" type="text" rounded)
        p.help.is-danger.is-pulled-right {{ validation.firstError('password') }}
        b-field(label="Password")
          b-input(v-model="password" type="password" placeholder="••••••••" rounded password-reveal)
        p.help.is-danger.is-pulled-right {{ validation.firstError('confirmPassword') }}
        b-field(label="Confirm Password")
          b-input(v-model="confirmPassword" type="password" placeholder="••••••••" rounded password-reveal)
        .has-text-right
          button.button.is-primary.is-outlined(type="submit") Sign Up
      b-loading(:is-full-page="false" :active.sync="loading")
</template>

<script>
import SimpleVueValidation from 'simple-vue-validator'
const Validator = SimpleVueValidation.Validator

export default {
  name: 'signup',
  data () {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      loading: false
    }
  },
  validators: {
    username: value => { return Validator.value(value).required().minLength(4).maxLength(20) },
    email: value => { return Validator.value(value).required().email() },
    password: value => { return Validator.value(value).required().minLength(8) },
    'confirmPassword, password': (value, password) => {
      return Validator.value(value).required().match(password)
    }
  },
  methods: {
    processForm () {
      this.$validate().then(success => {
        if (success) this.submit()
      })
    },
    submit () {
      this.loading = true
      this.axios.post('register', {
        username: this.username,
        email: this.email,
        password: this.password
      })
        .then(() => this.$toast.open('Signup succeeded.'))
        .catch(() => this.$toast.open({
          message: 'Signup failed.',
          type: 'is-danger'
        }))
        .finally(() => { this.loading = false })
    }
  },
  mounted () {
    this.$refs.username.focus()
  }
}
</script>
