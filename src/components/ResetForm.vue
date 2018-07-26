<template lang="pug">
  #resetForm
    form(@submit.prevent="submit" novalidate)

      b-field(label="Email")
        b-input(v-model.trim="email" type="text" rounded ref="email")

      .has-text-right
        button.button.is-light(type="submit") Send Reset Link
</template>

<script>
export default {
  name: 'resetForm',
  data () {
    return {
      email: ''
    }
  },
  mounted () {
    this.$refs.email.focus()
  }
}
</script>
