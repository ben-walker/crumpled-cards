<template lang="pug">
  #profileModal
    .box
      .columns.is-centered
        .column.is-narrow
          user-avatar(:size="170")
        .column.is-narrow
          br
          h1.title.is-4.is-unselectable {{ username }}
          h2.subtitle.is-6.is-unselectable {{ email }}
          b-field.file
            b-upload(v-model="files" @input="upload")
              a Change your profile picture
</template>

<script>
import to from 'await-to-js'
import UserAvatar from '@/components/UserAvatar.vue'

export default {
  name: 'profileModal',
  data () {
    return {
      files: [],
      formData: new FormData(),
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
    async upload () {
      this.formData.set('file', this.newProfilePic)
      const [ err ] = await to(this.$store.dispatch('user/uploadProfilePic', this.formData))
      if (err) throw err
    }
  }
}
</script>
