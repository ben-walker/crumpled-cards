<template lang="pug">
  #nav
    nav.navbar.has-shadow.is-spaced.is-transparent.is-primary
      .navbar-brand
        h1.title.is-3.has-text-white {{ siteTitle }}
</template>

<script>
export default {
  name: 'navbar',
  props: [
    'siteTitle'
  ]  
}
</script>
