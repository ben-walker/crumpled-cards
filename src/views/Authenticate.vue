<template lang="pug">
  #authenticate
    b-loading(:is-full-page="true" :active.sync="loading")
    section.hero.is-fullheight
      .hero-head
        section.section.has-text-centered
          TitleHead
        .columns.is-centered
          .column.is-one-third
            transition(name="bounce" mode="out-in")
              keep-alive
                router-view(
                  @signup="requestSignup"
                  @login="requestLogin"
                  @forgotPassword="forgotPassword"
                )
</template>

<script>
import TitleHead from '@/components/TitleHead.vue'
import Toast from '@/mixins/Toast'

export default {
  name: 'authenticate',
  computed: {
    loading () {
      return this.$store.state.user.loading
    }
  },
  components: {
    TitleHead
  },
  mixins: [
    Toast
  ],
  methods: {
    requestSignup (payload) {
      this.$store.dispatch('user/signup', payload)
        .catch(err => this.dangerToast(err))
    },
    requestLogin (payload) {
      this.$store.dispatch('user/login', payload)
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
