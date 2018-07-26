<template lang="pug">
  .resetRouterLink
    router-link(to="/reset" :class="textColor")
      span.icon
        i.fas.fa-undo
      span Reset Password
</template>

<script>
export default {
  name: 'resetRouterLink',
  props: {
    textColor: {
      default: 'has-text-white',
      type: String
    }
  }
}
</script>
