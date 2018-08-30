<template lang="pug">
  #authenticate
    section.hero.is-fullheight
      .hero-head
        section.section.has-text-centered
          title-head
        .columns.is-centered
          .column.is-one-third
            transition(enter-active-class="animated bounceIn" leave-active-class="animated bounceOut" mode="out-in")
              keep-alive
                router-view(@error="handleError")
</template>

<script>
import { TitleHead } from '@/components'
import { toast } from '@/mixins'

export default {
  name: 'authenticate',
  components: {
    TitleHead
  },
  mixins: [
    toast
  ],
  methods: {
    handleError (err) {
      if (err.response) {
        switch (err.response.status) {
          case 401: // unauthorized
            this.dangerToast('Password incorrect')
            break
          case 422: // unprocessable
            this.dangerToast('User info could not be processed')
            break
          case 429: // rate limited
            this.dangerToast('Please try again later')
            break
          case 500: // internal server error
            this.dangerToast('Internal server error')
        }
      } else {
        this.dangerToast('Unexpected error')
      }
    }
  }
}
</script>
