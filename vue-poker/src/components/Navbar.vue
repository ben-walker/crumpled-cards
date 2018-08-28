<template lang="pug">
  #navbar
    nav.navbar.has-shadow.is-spaced.is-transparent
      .container
        .navbar-brand
          TitleHead.navbar-item
        .navbar-menu
          .navbar-start
          .navbar-end
            .navbar-item.has-dropdown.is-hoverable
              a #[avatar.is-unselectable(:username="$store.state.user.data.username" color="white")]
              .navbar-dropdown.is-boxed.is-right
                .navbar-item
                  strong.is-unselectable {{ $store.state.user.data.username }}
                hr.navbar-divider
                a.navbar-item
                  span.icon.has-text-primary
                    i.fas.fa-user
                  strong.is-unselectable View Account
                a.navbar-item(@click="logout")
                  span.icon.has-text-danger
                    i.fas.fa-sign-out-alt
                  strong.is-unselectable Log Out
</template>

<script>
import to from 'await-to-js'
import TitleHead from '@/components/TitleHead.vue'
import Avatar from 'vue-avatar'

export default {
  name: 'navbar',
  components: {
    TitleHead,
    Avatar
  },
  methods: {
    async logout () {
      const [ err ] = await to(this.$store.dispatch('user/logOut'))
      if (!err) this.$router.push('/welcome')
    }
  }
}
</script>
