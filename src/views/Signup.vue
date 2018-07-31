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
            p.is-size-6 Already have an account? #[InternalLink(:link="link")]
</template>

<script>
import TitleHead from '@/components/TitleHead.vue'
import SignupForm from '@/components/SignupForm.vue'
import InternalLink from '@/components/InternalLink.vue'
import Toast from '@/mixins/Toast'

export default {
  name: 'signup',
  data () {
    return {
      link: { id: 1, route: '/login', color: 'primary', icon: 'unlock', text: 'Log In' }
    }
  },
  components: {
    TitleHead,
    SignupForm,
    InternalLink
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
        .catch((err) => this.dangerToast(err))
    }
  }
}
</script>
