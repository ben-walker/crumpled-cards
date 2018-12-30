<template lang="pug">
  .foundUser.has-text-centered
    user-avatar(:size="140" :username="user.username" :profilePicture="user.profilePicture")
      a(slot="user-badge" @click="sendRequest(user.username)") #[user-badge(status="add")]
    h1.title.is-5.has-text-grey-dark.is-unselectable {{ user.username }}
</template>

<script>
import { httpProgress } from '@/config/axios'
import to from 'await-to-js'
import UserAvatar from '@/components/UserAvatar/userAvatar.vue'
import UserBadge from '@/components/UserBadge/userBadge.vue'

export default {
  name: 'foundUser',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  components: {
    UserAvatar,
    UserBadge
  },
  methods: {
    async sendRequest (username) {
      const [ err ] = await to(httpProgress.post('sendFriendRequest', {
        username
      }))
      console.log(err)
    }
  }
}
</script>
