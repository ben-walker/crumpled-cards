<template lang="pug">
  #navbar
    nav.navbar.has-shadow.is-spaced
      .container
        .navbar-brand
          TitleHead
        .navbar-menu
</template>

<script>
import TitleHead from '@/components/TitleHead.vue'

export default {
  name: 'navbar',
  components: {
    TitleHead
  }
}
</script>
