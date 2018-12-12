<template lang="pug">
  #home
    navbar
    transition(name="zoom-out" mode="out-in")
      router-view
</template>

<script>
import { Navbar } from '@/components'

export default {
  name: 'home',
  components: {
    Navbar
  }
}
</script>
