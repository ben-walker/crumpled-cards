<template lang="pug">
  #tableModal
    b-modal(:active.sync="active")
      .box
        form(@submit.prevent="submit" novalidate)
          a.is-size-3.is-unselectable(@click="newTitle") {{ titleize }}
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
