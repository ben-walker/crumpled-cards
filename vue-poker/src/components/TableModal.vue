<template lang="pug">
  b-modal(:active.sync="active")
    .box
      form(@submit.prevent="submit" novalidate)
        h2.subtitle.is-3.has-text-grey.is-marginless.is-unselectable {{ titleize }}
        a.is-unselectable(@click="newTitle") New Title
        .has-text-right
          button.button.is-light(type="submit") Create Table
</template>

<script>
import generate from 'project-name-generator'

export default {
  name: 'tableModal',
  data () {
    return {
      title: generate().spaced
    }
  },
  computed: {
    titleize () {
      return this.title.replace(/\w\S*/g, (text) => {
        return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()
      })
    },
    payload () {
      return {
        title: this.titleize
      }
    }
  },
  props: {
    active: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    newTitle () {
      this.title = generate().spaced
    },
    submit () {}
  }
}
</script>
