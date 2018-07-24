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
              SignupForm
            nav.breadcrumb.has-bullet-separator.is-centered
              ul
                li
                  router-link(to="/login")
                    span.icon.has-text-white
                      i.fas.fa-unlock
                    span.has-text-white Log In
</template>

<script>
import SignupForm from '@/components/SignupForm.vue'

export default {
  name: 'signup',
  components: {
    SignupForm
  },
  computed: {
    loading () {
      return this.$store.state.user.loading
    }
  },
  methods: {
    requestSignup (payload) {
      this.$store.dispatch('user/signup', payload)
        .catch(() => this.danger('Signup failed, please try again later.'))
    },
    danger (message) {
      this.$toast.open({
        message: message,
        position: 'is-bottom',
        type: 'is-warning',
        queue: false
      })
    }
  }
}
</script>
