<template lang="pug">
  #profileModal
    .box
      .columns.is-centered
        .column.is-narrow
          user-avatar(:size="170")
        .column.is-narrow
          br
          h1.title.is-4 {{ username }}
          h2.subtitle.is-6 {{ email }}
</template>

<script>
import UserAvatar from '@/components/UserAvatar.vue'

export default {
  name: 'profileModal',
  data () {
    return {
      username: this.$store.getters['user/username'],
      email: this.$store.getters['user/email']
    }
  },
  components: {
    UserAvatar
  }
}
</script>
