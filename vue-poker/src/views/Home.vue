<template lang="pug">
  #home
    Navbar
    TableModal(:active="true")
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import TableModal from '@/components/TableModal.vue'

export default {
  name: 'home',
  components: {
    TableModal,
    Navbar
  }
}
</script>
