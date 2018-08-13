<template lang="pug">
  .passwordStrengthMeter
    label.label Password Strength #[ToolTip(:text="helpText")]
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
        case 2: case 3: return 'is-warning'
        case 4: return 'is-success'
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
