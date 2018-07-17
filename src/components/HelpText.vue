<template lang="pug">
  .help-text
    p.help.is-danger(:class="direction") {{ msg }}
</template>

<script>
export default {
  name: 'helpText',
  props: [
    'dir',
    'msg'
  ],
  computed: {
    direction: function () {
      let defaultClass = 'has-text-centered'
      switch (this.dir) {
        case 'left':
          defaultClass = 'is-pulled-left'
          break
        case 'right':
          defaultClass = 'is-pulled-right'
          break
      }
      return defaultClass
    }
  }
}
</script>
