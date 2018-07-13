<template lang="pug">
  #nav
    nav.navbar.has-shadow.is-spaced.is-transparent.is-light
      .navbar-brand
        h1.title.is-2.has-text-primary {{ siteTitle }}
      .navbar-menu
        .navbar-end
          router-link.navbar-item.has-text-primary(to="/login" v-if="!authenticated") Log In
          p or
          router-link.navbar-item.has-text-primary(to="/signup" v-if="!authenticated") Sign Up
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
