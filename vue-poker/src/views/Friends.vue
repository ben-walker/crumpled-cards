<template lang="pug">
  #friends
    .section
      .container
        br
        nav.level
          .level-left
          .level-right
            .level-item
              user-search(
                @error="handleError"
                @userList="showFoundUsers"
              )
        .columns.is-multiline
          .column.is-one-fifth(v-for="user in users")
            .notification
              found-user(:user="user")
    back-to-top(:visibleoffset="500")
      button.button.is-primary Back to Top
</template>

<script>
import BackToTop from 'vue-backtotop'
import { UserSearch, FoundUser } from '@/components'
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
    UserAvatar,
    BackToTop,
    FoundUser
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
