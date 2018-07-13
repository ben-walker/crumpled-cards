<template lang="pug">
  #auth
    Navbar(siteTitle="Poker Nook" :authenticated="false")
    section.section
      .columns.is-centered.is-mobile
        .column.is-one-third
          transition(name="fade" mode="out-in")
            keep-alive
              router-view
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'auth',
  components: {
    Navbar
  }
}
</script>
