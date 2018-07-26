<template lang="pug">
  #reset
    section.hero.is-fullheight
      .hero-head
        section.section.has-text-centered
          TitleHead
        .columns.is-centered
          .column.is-one-third
            .box
              h2.subtitle.is-4.has-text-grey Reset Your Password
              div(v-if="emailSent")
                .has-text-centered
                  div
                    p Password reset link sent, check your inbox!
                  div
                    InternalLink(:link="loginLink")
              div(v-else)
                ResetForm(@reset="sendLink")
</template>

<script>
import TitleHead from '@/components/TitleHead.vue'
import ResetForm from '@/components/ResetForm.vue'
import InternalLink from '@/components/InternalLink.vue'

export default {
  name: 'reset',
  data () {
    return {
      emailSent: false,
      loginLink: { route: '/login', color: 'dark', icon: 'unlock', text: 'Log In' }
    }
  },
  components: {
    TitleHead,
    ResetForm,
    InternalLink
  },
  methods: {
    sendLink (email) {
      this.emailSent = true
    }
  }
}
</script>
