<template lang="pug">
  #welcome
    section.hero.is-fullheight.is-primary.is-bold
      .hero-body
        .container.has-text-centered
          h1.title.is-1 {{ $appName }}
          h2.subtitle.is-4.
            online poker, made with ❤️
          .field.is-grouped.is-grouped-centered
            .control
              router-link.button.is-white.is-outlined(to="/login") Log In
            .control
              router-link.button.is-white.is-outlined(to="/signup") Sign Up
</template>

<script>
export default {
  name: 'welcome'
}
</script>
