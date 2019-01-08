<template lang="pug">
  .table-tile
    .box
      p.title.has-text-grey-dark.is-unselectable.is-marginless {{ table.title }}
      p.help.is-unselectable {{ createdAtReadable }}
      .has-text-right
        button.button.is-primary
          b-icon(pack="fas" icon="sign-in-alt" size="is-small")
          span Join Table
</template>

<script>
import moment from 'moment'

export default {
  name: 'tableTile',
  props: {
    table: {
      type: Object,
      required: true
    }
  },
  computed: {
    createdAtReadable () {
      const diff = moment().to(this.table.createdAt)
      return `Created ${diff}`
    }
  }
}
</script>
