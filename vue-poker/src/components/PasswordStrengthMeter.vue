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
  props: ['password'],
  computed: {
    quotient () {
      return measureEntropy(this.password) / this.MAX
    },
    color () {
      if (this.quotient < 0.2) return 'is-danger'
      else if (this.quotient > 0.2 && this.quotient < 0.6) return 'is-warning'
      else if (this.quotient > 0.6 && this.quotient < 0.8) return 'is-success'
      else if (this.quotient > 0.8) return 'is-primary'
    },
    message () {
      if (this.quotient === 0) return ''
      else if (this.quotient < 0.2) return 'Weak'
      else if (this.quotient > 0.2 && this.quotient < 0.6) return 'Risky'
      else if (this.quotient > 0.6 && this.quotient < 0.8) return 'Strong'
      else if (this.quotient > 0.8) return 'Secure'
    }
  }
}
</script>
