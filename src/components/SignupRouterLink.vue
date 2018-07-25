<template lang="pug">
  .signupRouterLink
    router-link(to="/signup" :class="textColor")
      span.icon
        i.fas.fa-clone
      span Sign Up
</template>

<script>
export default {
  name: 'signupRouterLink',
  props: {
    textColor: {
      default: 'has-text-white',
      type: String
    }
  }
}
</script>
