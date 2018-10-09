<template lang="pug">
  #profile
    a(@click="$router.go(-1)").has-text-dark.is-pulled-right #[b-icon(pack="fas" icon="times" size="is-large")]
</template>

<script>
export default {
  name: 'profile'
}
</script>
