<template lang="pug">
  #app
    Navbar(siteTitle="Poker Nook")
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
