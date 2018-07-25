<template lang="pug">
  .loginRouterLink
    router-link(to="/login" :class="textColor")
      span.icon
        i.fas.fa-unlock
      span Log In
</template>

<script>
export default {
  name: 'loginRouterLink',
  props: {
    textColor: {
      default: 'has-text-white',
      type: String
    }
  }
}
</script>
