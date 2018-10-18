<template lang="pug">
  transition(enter-active-class="animated fadeIn")
    #profile
      section.hero.is-fullheight
        .hero-head
          a(@click="$router.go(-1)").has-text-dark.is-pulled-right #[b-icon(pack="fas" icon="times" size="is-large")]
          .section
            .container.has-text-centered
              user-avatar(:size="170")
              br
              p.is-size-4.has-text-grey-dark.has-text-weight-semibold.is-unselectable {{ username }}
              p.is-size-4.has-text-grey-dark.has-text-weight-semibold.is-unselectable {{ email }}
              button.button.is-danger(@click="logOut")
                b-icon(pack="fas" icon="sign-out-alt" size="is-small")
                span Log Out
</template>

<script>
import UserAvatar from '@/components/UserAvatar'

export default {
  name: 'profile',
  data () {
    return {
      files: []
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
    UserAvatar
  },
  methods: {
    upload () {
      this.$emit('upload', this.files)
    },
    logOut () {
      this.$emit('logOut')
    }
  }
}
</script>
