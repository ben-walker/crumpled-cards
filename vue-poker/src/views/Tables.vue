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
    div(
      v-infinite-scroll="fetchTables"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="10"
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
      tables: [],
      lastSeenTableId: null,
      fetchQuantity: 20,
      busy: false
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
      this.busy = true
      const [ err, res ] = await to(http.get('tables', {
        params: {
          quantity: this.fetchQuantity,
          lastSeenId: this.lastSeenTableId
        }
      }))
      if (err) console.log(err)
      this.tables.push(...res.data)
      this.lastSeenTableId = this.tables.slice(-1)[0]._id
      this.busy = false
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
