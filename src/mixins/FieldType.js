export default {
  methods: {
    fieldType (field) {
      return this.validation.hasError(field)
        ? 'is-danger'
        : ''
    }
  }
}
