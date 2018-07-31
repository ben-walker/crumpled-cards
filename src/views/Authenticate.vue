<template lang="pug">
  #authenticate
    b-loading(:is-full-page="true" :active.sync="loading")
    section.hero.is-fullheight
      .hero-head
        section.section.has-text-centered
          TitleHead
        .columns.is-centered
          .column.is-one-third
            transition(name="fade" mode="out-in")
              keep-alive
                router-view(@login="requestLogin")
</template>

<script>
import TitleHead from '@/components/TitleHead.vue'
import Toast from '@/mixins/Toast'

export default {
  name: 'authenticate',
  computed: {
    loading () {
      return this.$store.state.user.loading
    }
  },
  components: {
    TitleHead
  },
  mixins: [
    Toast
  ],
  methods: {
    requestLogin (payload) {
      this.$store.dispatch('user/login', payload)
        .catch(err => this.dangerToast(err))
    }
  }
}
</script>
