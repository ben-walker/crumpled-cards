<template lang="pug">
  .passwordStrengthMeter
    label.label Password Strength
    progress.progress.is-marginless.is-small(:value="strengthScore" :class="strengthColor" max="4")
    p.help.label {{ warning }}
</template>

<script>
import zxcvbn from 'zxcvbn'
import ToolTip from './ToolTip.vue'

export default {
  name: 'passwordStrengthMeter',
  data () {
    return {
      helpText: 'Measured in bits of entropy, compared against common passwords.'
    }
  },
  props: ['password'],
  computed: {
    zxcvbnResult () {
      return zxcvbn(this.password)
    },
    strengthScore () {
      return this.zxcvbnResult.score
    },
    strengthColor () {
      switch (this.strengthScore) {
        case 0: case 1: return 'is-danger'
        case 2: return 'is-warning'
        case 3: return 'is-success'
        case 4: return 'is-primary'
      }
    },
    warning () {
      return this.zxcvbnResult.feedback.warning
    }
  },
  components: {
    ToolTip
  }
}
</script>
