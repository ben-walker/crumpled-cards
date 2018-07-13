<template lang="pug">
  #app
    Navbar(siteTitle="Poker Nook" :authenticated="false")
    section.section.is-medium
      .columns.is-centered.is-mobile
        .column.is-one-third
          transition(name="fade" mode="out-in")
            router-view
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
  font-size: 140%;
}
</style>
