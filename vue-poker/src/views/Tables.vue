<template lang="pug">
  #tables
    .section
      .container
        br
    fab(
      :actions="[]"
      :enable-rotation="false"
      @click.native=""
      z-index="10"
      icon-size="small"
    )
</template>

<script>
import fab from 'vue-fab'

export default {
  name: 'tables',
  components: {
    fab
  },
  methods: {}
}
</script>
