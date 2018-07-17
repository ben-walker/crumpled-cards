<template lang="pug">
  #login
    .box
      form(@submit.prevent="processForm" novalidate)
        b-field(label="Username or Email")
          b-input(v-model.trim="identifier" type="text" rounded ref="identifier")
        b-field(label="Password")
          b-input(v-model="password" type="password" placeholder="••••••••" rounded password-reveal)
        .field
          b-checkbox(v-model="rememberMe") Remember me
        .has-text-right
          button.button.is-primary.is-outlined(type="submit") Log In
      b-loading(:is-full-page="false" :active.sync="loading")
</template>

<script>
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
  methods: {
    processForm () {
      this.requestLogin()
    },
    requestLogin () {

    }
  },
  mounted () {
    this.$refs.identifier.focus()
  }
}
</script>
