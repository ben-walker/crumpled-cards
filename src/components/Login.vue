<template lang="pug">
  #login
    .box
      form
        b-field(label="Username or Email")
          b-input(v-model.trim="identifier" type="text" rounded ref="identifier")
        b-field(label="Password")
          b-input(v-model="password" type="password" placeholder="••••••••" rounded password-reveal)
        .field
          b-checkbox(v-model="rememberMe") Remember me
        .has-text-right
          button.button.is-primary.is-outlined(type="submit") Log In
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      identifier: '',
      password: '',
      rememberMe: false
    }
  },
  mounted () {
    this.$refs.identifier.focus()
  }
}
</script>
