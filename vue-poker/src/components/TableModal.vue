<template lang="pug">
  #tableModal
    b-modal(:active.sync="active")
      .box
        h2.subtitle.is-4.has-text-grey.is-unselectable Create Your Table
        form(@submit.prevent="submit" novalidate)
          label.label.is-unselectable(@click="newTitle") Title
          span.tag.is-primary.is-large.is-unselectable(@click="newTitle") {{ titleize }}
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
