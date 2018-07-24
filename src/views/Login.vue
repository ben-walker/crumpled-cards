<template lang="pug">
  #login
    b-loading(:is-full-page="true" :active.sync="loading")
    section.hero.is-fullheight.is-primary.is-bold
      .hero-head
        section.section.has-text-centered
          h1.title.is-1 {{ $appName }}
        .columns.is-centered
          .column.is-one-third
            .box
              h2.subtitle.is-4.has-text-grey Welcome Back
              LoginForm(@login="requestLogin")
            nav.breadcrumb.has-bullet-separator.is-centered
              ul
                li
                  router-link.has-text-white(to="/signup")
                    span.icon
                      i.fas.fa-clone
                    span Sign Up
                li
                  a.has-text-white
                    span.icon
                      i.fas.fa-undo
                    span Reset Password
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'login',
  components: {
    LoginForm
  },
  computed: {
    loading () {
      return this.$store.state.user.loading
    }
  },
  methods: {
    requestLogin (payload) {
      this.$store.dispatch('user/login', payload)
        .catch(() => this.danger('Credentials not recognized.'))
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
