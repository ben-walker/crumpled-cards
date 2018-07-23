<template lang="pug">
  #app
    Auth
</template>

<script>
import Auth from '@/views/Auth.vue'

export default {
  name: 'app',
  components: {
    Auth
  },
  created () {
    this.$store.dispatch('user/verifyAuth').catch(err => this.$log.error(err))
  }
}
</script>
