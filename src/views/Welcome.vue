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
              li
                router-link(to="/login")
                  span.icon.has-text-white
                    i.fas.fa-unlock
                  span.has-text-white Log In
              li
                router-link(to="/signup")
                  span.icon.has-text-white
                    i.fas.fa-clone
                  span.has-text-white Sign Up
</template>

<script>
export default {
  name: 'welcome'
}
</script>
