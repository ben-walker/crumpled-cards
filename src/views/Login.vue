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
              LoginForm(@login="requestLogin" @forgotPassword="forgotPassword")
            nav.breadcrumb.has-bullet-separator.is-centered
              ul
                li(v-for="link in links" :key="link.id")
                  InternalLink(:link="link")
</template>

<script>
import TitleHead from '@/components/TitleHead.vue'
import LoginForm from '@/components/LoginForm.vue'
import InternalLink from '@/components/InternalLink.vue'
import Toast from '@/mixins/Toast'

export default {
  name: 'login',
  data () {
    return {
      links: [
        { id: 1, route: '/signup', color: 'white', icon: 'clone', text: 'Sign Up' }
      ]
    }
  },
  components: {
    TitleHead,
    LoginForm,
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
    requestLogin (payload) {
      this.$store.dispatch('user/login', payload)
        .catch((err) => this.warnToast(err))
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
