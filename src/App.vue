<template lang="pug">
  #app
    transition(name="fade" mode="out-in")
      router-view
</template>

<script>
export default {
  name: 'app',
  created () {
    this.$store.dispatch('user/updateAuthStatus')
  }
}
</script>
