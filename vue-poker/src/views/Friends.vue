<template lang="pug">
  #friends
    section.section
      .container
        h2.title.is-1.is-unselectable Friends
</template>

<script>
import { UserSearch } from '@/components'

export default {
  name: 'friends',
  components: {
    UserSearch
  }
}
</script>
