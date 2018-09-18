<template lang="pug">
  .userAvatar
    avatar.is-unselectable(:size="size" :username="username" :src="profilePicture")
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
    profilePicture: {
      type: String,
      required: true
    }
  },
  components: {
    Avatar
  }
}
</script>
