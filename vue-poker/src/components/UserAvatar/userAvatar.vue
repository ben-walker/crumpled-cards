<template lang="pug">
  .userAvatar
    avatar.is-unselectable(:size="size" :username="username" :src="profilePictureUrl")
</template>

<script>
import Avatar from '@lossendae/vue-avatar'

export default {
  name: 'userAvatar',
  props: {
    size: {
      type: Number,
      default: 50
    },
    username: {
      type: String,
      required: true
    },
    profilePictureUrl: {
      type: String,
      required: true
    }
  },
  components: {
    Avatar
  }
}
</script>
