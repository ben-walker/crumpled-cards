<template lang="pug">
  #tables
    .section
      .container
        br
        .columns.is-multiline
          .column.is-half(v-for="table in tables")
            .box
              p.title.has-text-grey-dark.is-unselectable.is-marginless {{ table.title }}
              p.help.is-unselectable {{ table.time }}
              .has-text-right
    fab(
      :actions="[]"
      :enable-rotation="false"
      ripple-color="dark"
      @click.native="openCreateTableModal"
      z-index="10"
      icon-size="small"
    )
</template>

<script>
import TableModal from '@/components/TableModal'
import fab from 'vue-fab'

export default {
  name: 'tables',
  data () {
    return {
      tables: [
        { title: 'Mock Table 1', time: 'Created 4 hours ago' },
        { title: 'Mock Table 2', time: 'Created < an hour ago' },
        { title: 'Mock Table 3', time: 'Created an hour ago' }
      ]
    }
  },
  components: {
    TableModal,
    fab
  },
  methods: {
    openCreateTableModal () {
      this.$modal.open({
        parent: this,
        component: TableModal,
        canCancel: ['escape', 'outside']
      })
    }
  }
}
</script>
