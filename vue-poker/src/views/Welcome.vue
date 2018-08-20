<template lang="pug">
  #welcome
    section.hero.is-fullheight
      .hero-body
        .container.has-text-centered
          TitleHead
          h2.subtitle.is-4 online poker, made with ❤️
          nav.breadcrumb.has-bullet-separator.is-centered
            ul
              li(v-for="link in links" :key="link.id")
                InternalLink(:link="link")
</template>

<script>
import { TitleHead, InternalLink } from '@/components'

export default {
  name: 'welcome',
  data () {
    return {
      links: [
        { id: 1, route: '/authenticate/login', color: 'primary', text: 'Log In' },
        { id: 2, route: '/authenticate/signup', color: 'primary', text: 'Sign Up' }
      ]
    }
  },
  components: {
    TitleHead,
    InternalLink
  }
}
</script>
