<template lang="pug">
  #login
    .box
      form(@submit.prevent="processForm" novalidate)
        p.help.is-danger.is-pulled-right {{ validation.firstError('identifier') }}
        b-field(label="Username or Email")
          b-input(v-model.trim="identifier" type="text" rounded ref="identifier")
        p.help.is-danger.is-pulled-right {{ validation.firstError('password') }}
        b-field(label="Password")
          b-input(v-model="password" type="password" placeholder="••••••••" rounded password-reveal)
        .field
          b-checkbox(v-model="rememberMe") Remember me
        .has-text-right
          button.button.is-primary.is-outlined(type="submit") Log In
      b-loading(:is-full-page="false" :active.sync="loading")
</template>

<script>
import SimpleVueValidation from 'simple-vue-validator'
const Validator = SimpleVueValidation.Validator

export default {
  name: 'login',
  data () {
    return {
      identifier: '',
      password: '',
      rememberMe: false,
      loading: false
    }
  },
  validators: {
    identifier: value => { return Validator.value(value).required() },
    password: value => { return Validator.value(value).required() }
  },
  methods: {
    processForm () {
      this.$validate().then(success => {
        if (success) this.submit()
      })
    },
    submit () {
      this.loading = true
      this.axios.post('login', {
        identifier: this.identifier,
        password: this.password
      })
        .then(() => this.$toast.open('Login succeeded.'))
        .catch(() => this.$toast.open({
          message: 'Login credentials not recognized.',
          type: 'is-danger'
        }))
        .finally(() => { this.loading = false })
    }
  },
  mounted () {
    this.$refs.identifier.focus()
  }
}
</script>
