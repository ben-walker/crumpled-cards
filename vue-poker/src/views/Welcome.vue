<template lang="pug">
  #welcome
    .hero
      .hero-head
        .section.is-medium
          .container.has-text-centered
            title-head
            h2.subtitle.is-4.is-unselectable online poker, made with ❤️
            nav.breadcrumb.has-bullet-separator.is-centered
              ul
                li #[router-link(:to="{ name: 'login' }") Log In]
                li #[router-link(:to="{ name: 'signup' }") Sign Up]
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
