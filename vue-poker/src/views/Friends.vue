<template lang="pug">
  #friends
    section.section
      .container
        .columns.is-centered
          .column.is-one-third
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
