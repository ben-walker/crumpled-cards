<template lang="pug">
  #titleHead
    router-link.title.is-2.is-unselectable(:class="textColor" :to="{ name: 'home' }") {{ $appName }}
</template>

<script>
export default {
  name: 'titleHead',
  props: {
    textColor: {
      type: String,
      default: 'has-text-dark'
    }
  }
}
</script>
