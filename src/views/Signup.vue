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
                li(v-for="link in links" :key="link.id")
                  InternalLink(:link="link")
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
      links: [
        { id: 1, route: '/login', color: 'white', icon: 'unlock', text: 'Log In' }
      ]
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
        .catch((err) => this.warnToast(err))
    }
  }
}
</script>
