<template lang="pug">
  #nav
    nav.navbar.has-shadow.is-spaced
      .container
        .navbar-brand
          h1.title.is-2.has-text-primary {{ siteTitle }}
        .navbar-menu
          .navbar-end(v-if="!authenticated")
            router-link.navbar-item(to="/login") Log In
            router-link.navbar-item(to="/signup") Sign Up
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
