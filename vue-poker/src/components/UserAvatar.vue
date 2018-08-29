<template lang="pug">
  .userAvatar
    avatar.is-unselectable(:size="size" color="white" :username="username")
</template>

<script>
import Avatar from 'vue-avatar'

export default {
  name: 'userAvatar',
  data () {
    return {
      username: this.$store.getters['user/username']
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
