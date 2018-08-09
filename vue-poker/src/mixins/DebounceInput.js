import _ from 'lodash'

const DELAY_MS = 300

export default {
  methods: {
    debounceInput: _.debounce(function (field, value) {
      this.$v[field].$model = value
    }, DELAY_MS)
  }
}
