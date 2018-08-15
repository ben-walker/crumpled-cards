<template lang="pug">
  .passwordStrengthMeter
    label.label Password Strength
    progress.progress.is-marginless.is-small(:value="strengthScore" :class="strengthColor" max="4")
    p.help.label {{ warning }}
</template>

<script>
export default {
  name: 'passwordStrengthMeter',
  props: ['zxcvbnResult'],
  computed: {
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
  }
}
</script>
