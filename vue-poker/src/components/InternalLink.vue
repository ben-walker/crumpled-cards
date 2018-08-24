<template lang="pug">
  router-link.is-unselectable(:to="link.route" :class="'has-text-' + link.color")
    span {{ link.text }}
</template>

<script>
export default {
  name: 'internalLink',
  props: ['link']
}
</script>
