<template lang="pug">
  #welcome
    section.hero.is-fullheight.is-primary.is-bold
      .hero-body
        .container.has-text-centered
          h1.title.is-1 {{ siteTitle }}
          h2.subtitle.is-4.
            online poker, made with ❤️
          router-link.button.is-white.is-outlined(to="/login") Let's Go
</template>

<script>
export default {
  name: 'welcome',
  props: [
    'siteTitle'
  ]
}
</script>
