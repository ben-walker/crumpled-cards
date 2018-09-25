<template lang="pug">
  .foundUser
    .card
      .card-content.has-text-centered
        user-avatar(:size="140" :username="user.username" :profilePicture="user.profilePicture")
        h1.title.is-5.has-text-grey-dark.is-unselectable {{ user.username }}
      .card-footer
        a.card-footer-item #[b-icon(pack="fas" icon="plus")]
</template>

<script>
import UserAvatar from '@/components/UserAvatar/userAvatar.vue'

export default {
  name: 'foundUser',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  components: {
    UserAvatar
  }
}
</script>
