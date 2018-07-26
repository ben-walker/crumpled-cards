<template lang="pug">
  #welcome
    section.hero.is-fullheight
      .hero-body
        .container.has-text-centered
          TitleHead
          h2.subtitle.is-4.has-text-white online poker, made with ❤️
          nav.breadcrumb.has-bullet-separator.is-centered
            ul
              li(v-for="link in links" :key="link.id")
                InternalLink(:link="link")
</template>

<script>
import TitleHead from '@/components/TitleHead.vue'
import InternalLink from '@/components/InternalLink.vue'

export default {
  name: 'welcome',
  data () {
    return {
      links: [
        { id: 1, route: '/login', color: 'white', icon: 'unlock', text: 'Log In' },
        { id: 2, route: '/signup', color: 'white', icon: 'clone', text: 'Sign Up' }
      ]
    }
  },
  components: {
    TitleHead,
    InternalLink
  }
}
</script>
