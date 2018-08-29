<template lang="pug">
  .userAvatar
    avatar.is-unselectable(:size="size" color="white" :username="username" :src="profilePictureURL")
</template>

<script>
import Avatar from 'vue-avatar'

export default {
  name: 'userAvatar',
  data () {
    return {
      username: this.$store.getters['user/username'],
      profilePictureURL: `${process.env.VUE_APP_API}profilePicture/${this.$store.getters['user/id']}`
    }
  },
  props: {
    size: {
      default: 50,
      type: Number
    }
  },
  components: {
    Avatar
  }
}
</script>
