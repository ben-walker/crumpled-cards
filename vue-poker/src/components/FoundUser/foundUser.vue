<template lang="pug">
  .foundUser.has-text-centered
    user-avatar(:size="140" :username="user.username" :profilePicture="user.profilePicture")
      button.button.is-primary(slot="user-badge")
        b-icon(pack="fas" icon="plus" size="is-small")
    h1.title.is-5.has-text-grey-dark.is-unselectable {{ user.username }}
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
