<template lang="pug">
  #tableModal
    .box
      h2.subtitle.is-4.has-text-grey.is-unselectable Create Your Table
      form(@submit.prevent="submit" novalidate)
        p.heading.is-marginless.is-unselectable Title
        p.title.is-marginless.is-unselectable {{ title }}
        a.is-size-6.is-unselectable(@click="newTitle") Refresh
        .has-text-right
          button.button.is-primary(type="submit")
            b-icon(pack="fas" icon="plus" size="is-small")
            span Create
</template>

<script>
import { httpProgress } from '@/config/axios'
import to from 'await-to-js'
import generate from 'project-name-generator'

export default {
  name: 'tableModal',
  data () {
    return {
      rawTitle: generate().spaced
    }
  },
  computed: {
    title () {
      return this.rawTitle.replace(/\w\S*/g, (text) => {
        return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()
      })
    },
    payload () {
      return {
        title: this.title
      }
    }
  },
  methods: {
    newTitle () {
      this.rawTitle = generate().spaced
    },
    async submit () {
      await to(httpProgress.post('createTable', this.payload))
    }
  }
}
</script>
