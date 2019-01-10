<template lang="pug">
  #tables
    .section
      .container
        br
        .columns.is-multiline
          .column.is-half(v-for="table in tables")
            table-tile(:table="table")
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
import {
  TableModal,
  TableTile
} from '@/components'
import to from 'await-to-js'
import fab from 'vue-fab'

export default {
  name: 'tables',
  data () {
    return {
      tables: null,
      lastSeenTableId: null,
      fetchQuantity: 20
    }
  },
  created () {
    this.fetchTables()
  },
  components: {
    TableModal,
    TableTile,
    fab
  },
  methods: {
    async fetchTables () {
      const [ err, res ] = await to(http.get('tables', {
        params: { quantity: this.fetchQuantity }
      }))
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
