<template lang="pug">
  #app
    Navbar(siteTitle="Poker Nook" :authenticated="false")
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
.router-link-exact-active {
  font-weight: bolder;
}
</style>
