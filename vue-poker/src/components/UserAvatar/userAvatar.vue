<template lang="pug">
  .userAvatar
    avatar.is-unselectable(:size="size" :username="username" :src="encodeImage(profilePicture)")
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
      required: true,
      validator: prop => typeof prop === 'object' || prop === null
    }
  },
  components: {
    Avatar
  },
  methods: {
    encodeImage (pic) {
      if (!pic || !pic.img) return ''
      const { img, mimetype } = pic
      const encoding = btoa(String.fromCharCode.apply(null, img.data))
      return `data:${mimetype};base64,${encoding}`
    }
  }
}
</script>
