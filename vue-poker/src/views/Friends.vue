<template lang="pug">
  #friends
    section.section
      .container
        nav.level
          .level-left
            .level-item
              h1.title.is-1.is-unselectable Friends
          .level-right
            .level-item
              user-search
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
