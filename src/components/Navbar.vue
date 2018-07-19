<template lang="pug">
  #nav
    nav.navbar.has-shadow.is-spaced.is-transparent.is-light
      .navbar-brand
        h1.title.is-2.has-text-primary {{ siteTitle }}
      .navbar-menu
        .navbar-end
          .navbar-item(v-if="!authenticated")
            router-link.button.is-primary(to="/login") Log In
          .navbar-item(v-if="!authenticated")
            router-link.button.is-primary(to="/signup") Sign Up
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
