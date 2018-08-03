<template lang="pug">
  b-field(
    :label="label"
    :custom-class="customClass"
    :type="type"
    :message="firstErrorMessage"
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
    }
  }
}
</script>
