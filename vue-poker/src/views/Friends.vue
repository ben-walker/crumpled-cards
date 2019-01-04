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
            .box
              found-user(:user="user")
    back-to-top(:visibleoffset="500")
      fab(
        :actions="[]"
        icon-size="small"
        main-icon="keyboard_arrow_up"
        ripple-color="dark"
        :enable-rotation="false"
      )
</template>

<script>
import BackToTop from 'vue-backtotop'
import { UserSearch, FoundUser } from '@/components'
import UserAvatar from '@/components/UserAvatar/userAvatar.vue'
import { toast } from '@/mixins'
import fab from 'vue-fab'

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
    FoundUser,
    fab
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

<style lang="scss" scoped>
.vue-back-to-top {
  z-index: 10;
}
</style>
