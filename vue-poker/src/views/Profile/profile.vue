<template lang="pug">
  transition(enter-active-class="animated fadeIn")
    #profile
      section.hero.is-fullheight
        .hero-head
          a(@click="$router.go(-1)").has-text-dark.is-pulled-right #[b-icon(pack="fas" icon="times" size="is-large")]
          .section
            .columns.is-centered
              .column.is-narrow.has-text-centered
                user-avatar(:size="220")
                  a(slot="user-badge") #[user-badge(status="edit")]
                br
                p.is-size-4.has-text-grey-dark.has-text-weight-semibold.is-unselectable {{ username }}
                p.is-size-4.has-text-grey-dark.has-text-weight-semibold.is-unselectable {{ email }}
</template>

<script>
import UserAvatar from '@/components/UserAvatar'
import UserBadge from '@/components/UserBadge'

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
    UserAvatar,
    UserBadge
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
