<template lang="pug">
  b-tooltip(:label="text" animated multilined)
    i.has-text-primary.fas.fa-question-circle.fa-lg
</template>

<script>
export default {
  name: 'toolTip',
  props: ['text']
}
</script>
