<template lang="pug">
  #userDropdown
    .navbar-item.has-dropdown(:class="{ 'is-active': isActive }" v-on-clickaway="hide")
      a(@click="toggle") #[user-avatar]
      .navbar-dropdown.is-boxed.is-right
        a.navbar-item(@click="openProfile")
          span
            .columns.is-centered
              .column.is-narrow
                user-avatar
              .column.is-narrow
                h1.title.is-4.is-unselectable {{ username }}
                h2.subtitle.is-6.is-unselectable {{ email }}

        hr.navbar-divider

        a.navbar-item(@click="logOut")
          span
            span.icon.is-large.has-text-danger.is-inline-block
              i.fas.fa-sign-out-alt.fa-lg
            strong.title.is-6.is-unselectable Log Out
</template>

<script>
import UserAvatar from '@/components/UserAvatar'
import Profile from '@/components/Profile'
import { mixin as clickaway } from 'vue-clickaway'

export default {
  name: 'userDropdown',
  data () {
    return {
      isActive: false
    }
  },
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
  mixins: [
    clickaway
  ],
  methods: {
    toggle () {
      this.isActive = !this.isActive
    },
    hide () {
      this.isActive = false
    },
    openProfile () {
      this.$modal.open({
        parent: this,
        component: Profile,
        canCancel: ['x', 'outside']
      })
      this.hide()
    },
    logOut () {
      this.hide()
      this.$emit('logOut')
    }
  }
}
</script>
