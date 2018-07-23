<template lang="pug">
  #app
    Auth
</template>

<script>
import Auth from '@/views/Auth.vue'
import Welcome from '@/views/Welcome.vue'

export default {
  name: 'app',
  components: {
    Auth,
    Welcome
  },
  created () {
    this.$store.dispatch('user/verifyAuth').catch(err => this.$log.error(err))
  }
}
</script>
