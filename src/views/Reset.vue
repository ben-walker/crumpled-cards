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
                    LoginRouterLink(textColor="has-text-primary")
              div(v-else)
</template>

<script>
import TitleHead from '@/components/TitleHead.vue'
import LoginRouterLink from '@/components/LoginRouterLink.vue'

export default {
  name: 'reset',
  data () {
    return {
      emailSent: false
    }
  },
  components: {
    TitleHead,
    LoginRouterLink
  }
}
</script>
