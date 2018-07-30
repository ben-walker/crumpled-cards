<template lang="pug">
  router-link.has-text-weight-bold(:to="link.route" :class="'has-text-' + link.color")
    span.icon
      i.fas(:class="'fa-' + link.icon")
    span {{ link.text }}
</template>

<script>
export default {
  name: 'internalLink',
  props: ['link']
}
</script>
