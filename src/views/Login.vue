<template lang="pug">
  #login
    b-loading(:is-full-page="true" :active.sync="loading")
    section.hero.is-fullheight
      .hero-head
        section.section.has-text-centered
          TitleHead
        .columns.is-centered
          .column.is-one-third
            .box
              h2.subtitle.is-4.has-text-grey Welcome Back
              LoginForm(@login="requestLogin")
            nav.breadcrumb.has-bullet-separator.is-centered
              ul
                li #[SignupRouterLink]
                li #[ResetRouterLink]
</template>

<script>
import TitleHead from '@/components/TitleHead.vue'
import LoginForm from '@/components/LoginForm.vue'
import SignupRouterLink from '@/components/SignupRouterLink.vue'
import ResetRouterLink from '@/components/ResetRouterLink.vue'
import Toast from '@/mixins/Toast'

export default {
  name: 'login',
  components: {
    TitleHead,
    LoginForm,
    SignupRouterLink,
    ResetRouterLink
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
    requestLogin (payload) {
      this.$store.dispatch('user/login', payload)
        .catch((err) => this.warnToast(err))
    }
  }
}
</script>
