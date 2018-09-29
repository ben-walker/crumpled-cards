<template lang="pug">
  #navbar
    nav.navbar.has-shadow.is-spaced.is-transparent.is-fixed-top
      .container
        .navbar-brand
          title-head.navbar-item
        .navbar-menu
          .navbar-start
          .navbar-end
            router-link.navbar-item(:to="{ name: 'tables' }" active-class="is-active")
              span.icon
                b-icon(pack="fas" icon="layer-group" size="is-small")
              span Tables
            router-link.navbar-item(:to="{ name: 'friends' }" active-class="is-active")
              span.icon
                b-icon(pack="fas" icon="user-friends" size="is-small")
              span Friends
            user-dropdown.navbar-item
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
