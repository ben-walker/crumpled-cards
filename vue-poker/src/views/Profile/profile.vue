<template lang="pug">
  transition(enter-active-class="animated fadeIn")
    #profile
      section.hero.is-fullheight
        .hero-head
          a(@click="$router.go(-1)").has-text-dark.is-pulled-right #[b-icon(pack="fas" icon="times" size="is-large")]
          .section
            aside #[h1.title.is-1.is-unselectable Profile]
            .columns.is-centered
              .column.is-narrow
                user-avatar.has-text-centered(:size="190")
                br
                div
                  p.heading.is-marginless.is-unselectable Username
                  p.is-size-4.has-text-grey-dark.has-text-weight-semibold.is-unselectable {{ username }}
                div
                  p.heading.is-marginless.is-unselectable Email
                  p.is-size-4.has-text-grey-dark.has-text-weight-semibold.is-unselectable {{ email }}
                div
                  b-upload(v-model="file" @input="upload") #[a Change Profile Pic]
                div
                  a.has-text-danger(@click="logOut") Log Out
</template>

<script>
import UserAvatar from '@/components/UserAvatar'
import UserBadge from '@/components/UserBadge'

export default {
  name: 'profile',
  data () {
    return {
      file: null
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
      this.$emit('upload', this.file)
    },
    logOut () {
      this.$emit('logOut')
    }
  }
}
</script>
