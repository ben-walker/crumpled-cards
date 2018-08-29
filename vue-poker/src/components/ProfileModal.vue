<template lang="pug">
  #profileModal
    .box
      .columns.is-centered
        .column.is-narrow
          user-avatar(:size="170")
</template>

<script>
import UserAvatar from '@/components/UserAvatar.vue'

export default {
  name: 'profileModal',
  data () {
    return {
      username: this.$store.getters['user/username']
    }
  },
  components: {
    UserAvatar
  }
}
</script>
