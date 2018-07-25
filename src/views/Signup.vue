<template lang="pug">
  #signup
    b-loading(:is-full-page="true" :active.sync="loading")
    section.hero.is-fullheight.is-primary.is-bold
      .hero-head
        section.section.has-text-centered
          h1.title.is-1 {{ $appName }}
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
import SignupForm from '@/components/SignupForm.vue'
import LoginRouterLink from '@/components/LoginRouterLink.vue'
import Toast from '@/mixins/Toast'

export default {
  name: 'signup',
  components: {
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
        .catch(() => this.warnToast('Signup failed, please try again later.'))
    }
  }
}
</script>
