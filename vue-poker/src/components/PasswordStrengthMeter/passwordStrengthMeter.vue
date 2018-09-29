<template lang="pug">
  .passwordStrengthMeter
    label.label.is-unselectable Password Strength
    progress.progress.is-marginless.is-small(:value="quotient" :class="data.color" max="1")
    p.label.help.is-unselectable {{ data.message }}
</template>

<script>
import measureEntropy from 'fast-password-entropy'

const strengthStates = {
  0: {
    color: 'is-danger',
    message: ''
  },
  1: {
    color: 'is-danger',
    message: 'Weak'
  },
  2: {
    color: 'is-warning',
    message: 'Risky'
  },
  3: {
    color: 'is-success',
    message: 'Strong'
  },
  4: {
    color: 'is-primary',
    message: 'Secure'
  }
}

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
    data () {
      return strengthStates[this.index]
    }
  }
}
</script>
