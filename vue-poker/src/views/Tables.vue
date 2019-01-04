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
import { http } from '@/config/axios'
import TableModal from '@/components/TableModal'
import to from 'await-to-js'
import fab from 'vue-fab'

export default {
  name: 'tables',
  data () {
    return {
      tables: null
    }
  },
  created () {
    this.fetchTables()
  },
  components: {
    TableModal,
    fab
  },
  methods: {
    async fetchTables () {
      const [ err, res ] = await to(http.get('tables'))
      if (err) console.log(err)
      this.tables = res.data
    },
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
