<template lang="pug">
  .passwordStrengthMeter
    label.label Password Strength
    progress.progress.is-small(:value="strength" :class="strengthColor" :max="MAX")
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
    strength () {
      return measureEntropy(this.password)
    },
    strengthColor () {
      const quotient = this.strength / this.MAX
      if (quotient < 0.2) return 'is-danger'
      else if (quotient > 0.2 && quotient < 0.6) return 'is-warning'
      else if (quotient > 0.6 && quotient < 0.8) return 'is-success'
      else if (quotient > 0.8) return 'is-primary'
    }
  }
}
</script>
