<template lang="pug">
  #userSearch
    b-field
      b-input(
        v-model="userQuery"
        placeholder="Search..."
        type="search"
        expanded
      )
</template>

<script>
export default {
  name: 'userSearch',
  data () {
    return {
      userQuery: ''
    }
  },
  watch: {
    userQuery () {}
  }
}
</script>
