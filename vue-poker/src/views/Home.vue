<template lang="pug">
  #home
    TableModal(:active="true")
</template>

<script>
import TableModal from '@/components/TableModal.vue'

export default {
  name: 'home',
  components: {
    TableModal
  }
}
</script>
