<template lang="pug">
  #app
    #nav
      router-link(to="/") Home
      |  |
      |
      router-link(to="/about") About
    router-view
</template>

<style lang="scss">
@import "~buefy/lib/buefy.min";
</style>
