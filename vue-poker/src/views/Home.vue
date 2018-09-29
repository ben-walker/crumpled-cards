<template lang="pug">
  #home
    navbar
    transition(name="fade" mode="out-in")
      router-view
</template>

<script>
import { Navbar } from '@/components'

const FIXED_NAV_CLASS = 'has-spaced-navbar-fixed-top'

export default {
  name: 'home',
  components: {
    Navbar
  },
  created () {
    const root = document.documentElement
    root.classList.add(FIXED_NAV_CLASS)
  },
  beforeDestroy () {
    const root = document.documentElement
    root.classList.remove(FIXED_NAV_CLASS)
  }
}
</script>
