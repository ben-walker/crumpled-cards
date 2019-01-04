<template lang="pug">
  .table-tile
    .box
      p.title.has-text-grey-dark.is-unselectable.is-marginless {{ table.title }}
      .has-text-right
</template>

<script>
export default {
  name: 'tableTile',
  props: {
    table: {
      type: Object,
      required: true
    }
  }
}
</script>
