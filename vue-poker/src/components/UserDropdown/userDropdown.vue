<template lang="pug">
  #userDropdown
    .navbar-item.has-dropdown.is-hoverable
      a #[user-avatar]
      .navbar-dropdown.is-boxed.is-right
        strong.is-unselectable.navbar-item {{ username }}

        hr.navbar-divider

        a.navbar-item(@click="openProfile")
          span.icon.has-text-primary
            i.fas.fa-user
          strong.is-unselectable Profile

        a.navbar-item(@click="logOut")
          span.icon.has-text-danger
            i.fas.fa-sign-out-alt
          strong.is-unselectable Log Out
</template>

<script>
import UserAvatar from '@/components/UserAvatar'
import Profile from '@/components/Profile'

export default {
  name: 'userDropdown',
  props: {
    username: {
      type: String,
      required: true
    }
  },
  components: {
    UserAvatar,
    Profile
  },
  methods: {
    openProfile () {
      this.$modal.open({
        parent: this,
        component: Profile,
        canCancel: ['x', 'outside']
      })
    },
    logOut () {
      this.$emit('logOut')
    }
  }
}
</script>
