<template lang="pug">
  #nav
    nav.navbar.has-shadow.is-spaced.is-transparent.is-primary
      .navbar-brand
        h1.title.is-2.has-text-white {{ siteTitle }}
      .navbar-menu
        .navbar-end
          router-link.navbar-item(to="/login" v-if="!authenticated") Login
          router-link.navbar-item(to="/signup" v-if="!authenticated") Signup
</template>

<script>
export default {
  name: 'navbar',
  props: [
    'siteTitle',
    'authenticated'
  ]
}
</script>
