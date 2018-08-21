<template lang="pug">
  #titleHead
    h1.title.is-2.is-unselectable(:class="textColor") {{ $appName }}
</template>

<script>
export default {
  name: 'titleHead',
  props: {
    textColor: {
      default: 'has-text-dark',
      type: String
    }
  }
}
</script>
