<template lang="pug">
  #navbar
    nav.navbar.has-shadow.is-spaced.is-transparent
      .container
        .navbar-brand
          title-head.navbar-item
        .navbar-menu
          .navbar-start
          .navbar-end
            .navbar-item.has-dropdown.is-hoverable
              a #[avatar.is-unselectable(:username="username" color="white")]
              .navbar-dropdown.is-boxed.is-right
                .navbar-item
                  strong.is-unselectable {{ username }}
                hr.navbar-divider
                a.navbar-item(@click="openProfile")
                  span.icon.has-text-primary
                    i.fas.fa-user
                  strong.is-unselectable Profile
                a.navbar-item(@click="logout")
                  span.icon.has-text-danger
                    i.fas.fa-sign-out-alt
                  strong.is-unselectable Log Out
</template>

<script>
import to from 'await-to-js'
import TitleHead from '@/components/TitleHead.vue'
import ProfileModal from '@/components/ProfileModal.vue'
import Avatar from 'vue-avatar'

export default {
  name: 'navbar',
  data () {
    return {
      username: this.$store.getters['user/username']
    }
  },
  components: {
    TitleHead,
    Avatar,
    ProfileModal
  },
  methods: {
    async logout () {
      const [ err ] = await to(this.$store.dispatch('user/logOut'))
      if (!err) this.$router.push('/welcome')
    },
    openProfile () {
      this.$modal.open({
        parent: this,
        component: ProfileModal
      })
    }
  }
}
</script>
