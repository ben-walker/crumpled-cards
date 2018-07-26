<template lang="pug">
  #reset
    section.hero.is-fullheight
      .hero-head
        section.section.has-text-centered
          TitleHead
        .columns.is-centered
          .column.is-one-third
            .box
              h2.subtitle.is-4.has-text-grey Reset Your Password
</template>

<script>
import TitleHead from '@/components/TitleHead.vue'

export default {
  name: 'reset',
  components: {
    TitleHead
  }
}
</script>
