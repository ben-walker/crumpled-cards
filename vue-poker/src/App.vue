<template lang="pug">
  #app
    transition(name="fade" mode="out-in")
      router-view
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import "./scss/custom";
</style>
