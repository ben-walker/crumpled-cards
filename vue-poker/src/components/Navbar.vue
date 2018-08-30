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
import ProfileModal from '@/components/ProfileModal.vue'
import UserDropdown from '@/components/UserDropdown'

export default {
  name: 'navbar',
  components: {
    TitleHead,
    ProfileModal,
    UserDropdown
  },
  methods: {
    openProfile () {
      this.$modal.open({
        parent: this,
        component: ProfileModal,
        canCancel: ['x', 'outside']
      })
    }
  }
}
</script>
