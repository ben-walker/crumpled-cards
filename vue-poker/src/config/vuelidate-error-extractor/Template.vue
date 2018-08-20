<template lang="pug">
  b-field(
    :label="label"
    :custom-class="customClass"
    :type="type"
    :message="errorMessage"
  )
    slot
</template>

<script lang="ts">
import Vue from 'vue'
import { singleErrorExtractorMixin } from 'vuelidate-error-extractor'

export default Vue.extend({
  extends: singleErrorExtractorMixin,
  computed: {
    type (): string {
      return this.hasErrors
        ? 'is-danger'
        : null
    },

    customClass (): string {
      return this.hasErrors
        ? 'has-text-danger'
        : null
    },

    errorMessage (): string {
      return this.hasErrors
        ? this.firstErrorMessage
        : null
    }
  }
})
</script>
