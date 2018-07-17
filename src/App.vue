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
  }
}
</script>

<style lang="scss">
.router-link-exact-active {
  font-weight: bolder;
  font-size: 120%;
}
</style>
