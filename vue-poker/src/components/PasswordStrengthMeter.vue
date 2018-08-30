<template lang="pug">
  .passwordStrengthMeter
    label.label Password Strength
    progress.progress.is-marginless.is-small(:value="quotient" :class="color" max="1")
    p.label.help {{ message }}
</template>

<script>
import measureEntropy from 'fast-password-entropy'

export default {
  name: 'passwordStrengthMeter',
  data () {
    return {
      MAX: 128
    }
  },
  props: {
    password: {
      type: String,
      required: true
    }
  },
  computed: {
    quotient () {
      return measureEntropy(this.password) / this.MAX
    },
    index () {
      if (this.quotient === 0) return 0
      else if (this.quotient < 0.2) return 1
      else if (this.quotient < 0.6) return 2
      else if (this.quotient < 0.8) return 3
      else return 4
    },
    color () {
      switch (this.index) {
        case 0: case 1: return 'is-danger'
        case 2: return 'is-warning'
        case 3: return 'is-success'
        case 4: return 'is-primary'
      }
    },
    message () {
      switch (this.index) {
        case 0: return ''
        case 1: return 'Weak'
        case 2: return 'Risky'
        case 3: return 'Strong'
        case 4: return 'Secure'
      }
    }
  }
}
</script>
