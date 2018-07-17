<template lang="pug">
  #signup
    .box
      h1.subtitle.is-4.has-text-grey Create Your Account
      form(@submit.prevent novalidate)
        b-field(label="Username")
          b-input(v-model.trim="username" type="text" rounded ref="username")
        b-field(label="Email")
          b-input(v-model.trim="email" type="text" rounded)
        b-field(label="Password")
          b-input(v-model="password" type="password" placeholder="••••••••" rounded password-reveal)
        b-field(label="Confirm Password")
          b-input(v-model="confirmPassword" type="password" placeholder="••••••••" rounded password-reveal)
        .has-text-right
          button.button.is-primary.is-outlined(type="submit") Sign Up
      b-loading(:is-full-page="false" :active.sync="loading")
</template>

<script>
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
  mounted () {
    this.$refs.username.focus()
  }
}
</script>
