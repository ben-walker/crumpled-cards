<template lang="pug">
  #welcome
    section.hero.is-fullheight
      .hero-head
        section.section.is-medium
          .container.has-text-centered
            TitleHead
            h2.subtitle.is-4.is-unselectable online poker, made with ❤️
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
