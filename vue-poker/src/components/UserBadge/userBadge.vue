<template lang="pug">
  .userBadge
    span.fa-stack
      i.fas.fa-circle.fa-stack-2x(:class="badgeData.color")
      i.fas.fa-stack-1x.has-text-white(v-if="badgeData.icon" :class="badgeData.icon")
</template>

<script>
const badgeStatii = {
  add: {
    icon: 'fa-plus',
    color: 'has-text-primary'
  },
  online: {
    icon: null,
    color: 'has-text-success'
  }
}

export default {
  name: 'userBadge',
  props: {
    status: {
      type: String,
      required: true
    }
  },
  computed: {
    badgeData () {
      return badgeStatii[this.status]
    }
  }
}
</script>
