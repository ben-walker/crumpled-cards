<template lang="pug">
  #welcome
    section.hero.is-fullheight
      .hero-head
        section.section.is-medium
          .container.has-text-centered
            title-head
            h2.subtitle.is-4.is-unselectable online poker, made with ❤️
            nav.breadcrumb.has-bullet-separator.is-centered
              ul
                li #[router-link(to="/authenticate/login") Log In]
                li #[router-link(to="/authenticate/signup") Sign Up]
</template>

<script>
import { TitleHead } from '@/components'

export default {
  name: 'welcome',
  components: {
    TitleHead
  }
}
</script>
