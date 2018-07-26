<template lang="pug">
  #signup
    b-loading(:is-full-page="true" :active.sync="loading")
    section.hero.is-fullheight
      .hero-head
        section.section.has-text-centered
          TitleHead
        .columns.is-centered
          .column.is-one-third
            .box
              h2.subtitle.is-4.has-text-grey Create Your Account
              SignupForm(@signup="requestSignup")
            nav.breadcrumb.has-bullet-separator.is-centered
              ul
                li #[LoginRouterLink]
</template>

<script>
import TitleHead from '@/components/TitleHead.vue'
import SignupForm from '@/components/SignupForm.vue'
import LoginRouterLink from '@/components/LoginRouterLink.vue'
import Toast from '@/mixins/Toast'

export default {
  name: 'signup',
  components: {
    TitleHead,
    SignupForm,
    LoginRouterLink
  },
  mixins: [
    Toast
  ],
  computed: {
    loading () {
      return this.$store.state.user.loading
    }
  },
  methods: {
    requestSignup (payload) {
      this.$store.dispatch('user/signup', payload)
        .catch((err) => this.warnToast(err))
    }
  }
}
</script>
