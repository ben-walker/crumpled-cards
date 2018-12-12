<template lang="pug">
  #navbar
    nav.navbar.has-shadow.is-spaced.is-transparent
      .container
        .navbar-brand
          title-head.navbar-item
        .navbar-menu
          .navbar-start
          .navbar-end
            router-link.navbar-item(:to="{ name: 'tables' }" active-class="is-active")
              span.is-size-5.has-text-weight-bold Tables
            router-link.navbar-item(:to="{ name: 'friends' }" active-class="is-active")
              span.is-size-5.has-text-weight-bold Friends
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
