import { debounce } from 'lodash-es'

const DELAY_MS = 500

export default {
  methods: {
    debounceInput: debounce(function (field, value) {
      this.$v[field].$model = value
    }, DELAY_MS)
  }
}
