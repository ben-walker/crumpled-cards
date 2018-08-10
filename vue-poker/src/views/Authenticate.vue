<template lang="pug">
  #authenticate
    section.hero.is-fullheight
      .hero-head
        section.section.has-text-centered
          TitleHead
        .columns.is-centered
          .column.is-one-third
            transition(enter-active-class="animated bounceIn" leave-active-class="animated bounceOut" mode="out-in")
              keep-alive
                router-view(
                  @signup="requestSignup"
                  @forgotPassword="forgotPassword"
                )
</template>

<script>
import TitleHead from '@/components/TitleHead.vue'
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
    requestSignup (payload) {
      this.$store.dispatch('user/signup', payload)
        .catch(err => this.dangerToast(err))
    },
    forgotPassword (identifier) {
      this.$dialog.alert({
        title: 'Instructions Sent',
        message: `Password reset instructions sent to <b>${identifier}</b>, check your inbox and spam folder.`,
        hasIcon: true,
        icon: 'envelope',
        iconPack: 'fa'
      })
    }
  }
}
</script>
