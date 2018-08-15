import { extend } from 'lodash'

export default {
  data () {
    return {
      type: 'is-dark',
      message: '',
      position: 'is-bottom',
      duration: 2000,
      queue: false,
      container: 'body'
    }
  },
  methods: {
    toast (message, options = {}) {
      extend(options, { message })
      this.openToast(options)
    },
    warnToast (message, options = {}) {
      extend(options, { type: 'is-warning', message })
      this.openToast(options)
    },
    dangerToast (message, options = {}) {
      extend(options, { type: 'is-danger', message })
      this.openToast(options)
    },
    openToast (options = {}) {
      const toastOpts = extend({}, this.$data, options)
      this.$toast.open(toastOpts)
    }
  }
}
