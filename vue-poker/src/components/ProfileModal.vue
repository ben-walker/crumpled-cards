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
          b-field.file
            b-upload(v-model="files" @input="upload")
              a Change your profile image
</template>

<script>
import UserAvatar from '@/components/UserAvatar.vue'

export default {
  name: 'profileModal',
  data () {
    return {
      files: [],
      username: this.$store.getters['user/username'],
      email: this.$store.getters['user/email']
    }
  },
  computed: {
    newProfilePic () {
      return this.files.length > 0
        ? this.files[0]
        : null
    }
  },
  components: {
    UserAvatar
  },
  methods: {
    upload () {}
  }
}
</script>
