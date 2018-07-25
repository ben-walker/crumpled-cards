<template lang="pug">
  #welcome
    section.hero.is-fullheight.is-primary.is-bold
      .hero-body
        .container.has-text-centered
          h1.title.is-1 {{ $appName }}
          h2.subtitle.is-4.
            online poker, made with ❤️
          nav.breadcrumb.has-bullet-separator.is-centered
            ul
              li #[LoginRouterLink]
              li #[SignupRouterLink]
</template>

<script>
import SignupRouterLink from '@/components/SignupRouterLink.vue'
import LoginRouterLink from '@/components/LoginRouterLink.vue'

export default {
  name: 'welcome',
  components: {
    SignupRouterLink,
    LoginRouterLink
  }
}
</script>
