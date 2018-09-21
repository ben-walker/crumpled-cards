<template lang="pug">
  #friends
    section.section
      .container
        nav.level
          .level-left
            .level-item
              h1.title.is-1.is-unselectable Friends
          .level-right
            .level-item
              user-search(
                @error="handleError"
                @userList="showFoundUsers"
              )
        .columns.is-multiline
          .column.is-one-quarter(v-for="user in users")
            .notification.has-text-centered
              user-avatar(:size="150" :username="user.username" :profilePicture="user.profilePicture")
              strong {{ user.username }}
</template>

<script>
import { UserSearch } from '@/components'
import UserAvatar from '@/components/UserAvatar/userAvatar.vue'
import { toast } from '@/mixins'

export default {
  name: 'friends',
  data () {
    return {
      users: []
    }
  },
  components: {
    UserSearch,
    UserAvatar
  },
  mixins: [
    toast
  ],
  methods: {
    showFoundUsers (users) {
      this.users = users
    },
    handleError (err) {
      if (err.response) {
        switch (err.response.status) {
          case 500: // internal server error
            this.dangerToast('Internal server error')
        }
      } else {
        this.dangerToast('Something went wrong')
      }
    }
  }
}
</script>
