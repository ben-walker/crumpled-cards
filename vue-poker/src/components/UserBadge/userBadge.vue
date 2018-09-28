<template lang="pug">
  .userBadge
    span.fa-stack
      i.fas.fa-circle.fa-stack-2x(:class="baseColor")
      i.fas.fa-stack-1x.has-text-white(:class="icon")
</template>

<script>
export default {
  name: 'userBadge',
  props: {
    status: {
      type: String,
      required: true
    }
  },
  computed: {
    statusCode () {
      switch (this.status) {
        case 'add': return 0
      }
    },
    baseColor () {
      switch (this.statusCode) {
        case 0: return 'has-text-primary'
      }
    },
    icon () {
      switch (this.statusCode) {
        case 0: return 'fa-plus'
      }
    }
  }
}
</script>
