<template lang="pug">
  #welcome
    section.hero.is-fullheight.is-primary.is-bold
      .hero-body
        .container
          h1.title.is-1 {{ siteTitle }}
          h2.subtitle.is-4.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          router-link.button.is-white.is-outlined.is-pulled-right(to="/signup") Enter Now
</template>

<script>
export default {
  name: 'welcome',
  props: [
    'siteTitle'
  ]
}
</script>
