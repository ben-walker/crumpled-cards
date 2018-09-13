<template lang="pug">
  #navbar
    nav.navbar.has-shadow.is-spaced
      .container
        .navbar-brand
          title-head.navbar-item
        .navbar-menu
          .navbar-start
          .navbar-end
            user-dropdown
</template>

<script>
import TitleHead from '@/components/TitleHead'
import UserDropdown from '@/components/UserDropdown'

export default {
  name: 'navbar',
  components: {
    TitleHead,
    UserDropdown
  }
}
</script>
