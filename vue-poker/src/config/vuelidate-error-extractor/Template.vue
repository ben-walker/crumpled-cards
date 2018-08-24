<template lang="pug">
  b-field.is-unselectable(
    :label="label"
    :custom-class="customClass"
    :type="type"
    :message="errorMessage"
  )
    slot
</template>

<script>
import { singleErrorExtractorMixin } from 'vuelidate-error-extractor'

export default {
  extends: singleErrorExtractorMixin,
  computed: {
    type () {
      return this.hasErrors
        ? 'is-danger'
        : null
    },
    customClass () {
      return this.hasErrors
        ? 'has-text-danger'
        : null
    },
    errorMessage () {
      return this.hasErrors
        ? this.firstErrorMessage
        : null
    }
  }
}
</script>
