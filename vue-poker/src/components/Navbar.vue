<template lang="pug">
  #navbar
    nav.navbar.has-shadow.is-spaced.is-transparent
      .container
        .navbar-brand
          title-head.navbar-item
        .navbar-menu
          .navbar-start
          .navbar-end
            user-dropdown(@openProfile="openProfile")
</template>

<script>
import TitleHead from '@/components/TitleHead.vue'
import Profile from '@/components/Profile'
import UserDropdown from '@/components/UserDropdown'

export default {
  name: 'navbar',
  components: {
    TitleHead,
    Profile,
    UserDropdown
  },
  methods: {
    openProfile () {
      this.$modal.open({
        parent: this,
        component: Profile,
        canCancel: ['x', 'outside']
      })
    }
  }
}
</script>
