<template lang="pug">
  #profile
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
              a Change profile picture
      .is-divider
</template>

<script>
import UserAvatar from '@/components/UserAvatar'

export default {
  name: 'profile',
  data () {
    return {
      files: []
    }
  },
  props: {
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  components: {
    UserAvatar
  },
  methods: {
    upload () {
      this.$emit('upload', this.files)
    }
  }
}
</script>

<style lang="scss" scoped>
.userAvatar {
  transition: transform .3s;
  &:hover {
    transform: scale(1.08);
  }
}
</style>
