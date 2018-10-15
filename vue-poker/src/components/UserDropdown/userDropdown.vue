<template lang="pug">
  #userDropdown
    b-dropdown(position="is-bottom-left")
      a(slot="trigger") #[user-avatar]
      b-dropdown-item(@click="openProfile")
        span
          .columns.is-centered
            .column.is-narrow
              user-avatar
            .column.is-narrow
              h1.title.is-4.is-unselectable {{ username }}
              h2.subtitle.is-6.is-unselectable {{ email }}

      hr.dropdown-divider

      b-dropdown-item(@click="logOut")
        nav.level.is-mobile
          .level-left
              b-icon.level-item.has-text-danger(pack="fas" icon="sign-out-alt")
              strong.title.is-6.is-unselectable.level-item Log Out
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
    },
    email: {
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
      this.$router.push({ name: 'profile' })
    },
    logOut () {
      this.$emit('logOut')
    }
  }
}
</script>
