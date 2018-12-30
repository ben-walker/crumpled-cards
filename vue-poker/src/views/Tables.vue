<template lang="pug">
  #tables
    .section
      .container
        br
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
