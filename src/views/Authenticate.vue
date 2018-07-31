<template lang="pug">
  #authenticate
    section.hero.is-fullheight
      .hero-head
        section.section.has-text-centered
          TitleHead
        .columns.is-centered
          .column.is-one-third
            transition(name="fade" mode="out-in")
              keep-alive #[router-view]
</template>

<script>
import TitleHead from '@/components/TitleHead.vue'

export default {
  name: 'authenticate',
  components: {
    TitleHead
  }
}
</script>
