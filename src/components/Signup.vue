<template lang="pug">
  #signup
    .box
      form
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
</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  mounted () {
    this.$refs.username.focus()
  }
}
</script>
