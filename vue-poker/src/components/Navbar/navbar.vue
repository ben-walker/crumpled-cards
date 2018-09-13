<template lang="pug">
  #navbar
    nav.navbar.has-shadow.is-spaced
      .container
        .navbar-brand
          title-head.navbar-item
        .navbar-menu
          .navbar-start
            .navbar-item
              router-link.button(:to="{ name: 'tables' }")
                b-icon(pack="fas" icon="layer-group" size="is-small")
                span Tables

            .navbar-item
              router-link.button(:to="{ name: 'friends' }")
                b-icon(pack="fas" icon="user-friends" size="is-small")
                span Friends

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
