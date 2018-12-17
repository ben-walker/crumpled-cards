<template lang="pug">
  #userSearch
    b-input(
      v-model="userQuery"
      placeholder="Find someone..."
      type="search"
      icon-pack="fas"
      icon="search"
      expanded
      rounded
    )
</template>

<script>
import { httpProgress } from '@/config/axios'
import to from 'await-to-js'
import { debounce } from 'lodash-es'

export default {
  name: 'userSearch',
  data () {
    return {
      userQuery: ''
    }
  },
  watch: {
    userQuery () {
      this.debouncedUserQuery()
    }
  },
  methods: {
    async findUsers () {
      if (this.userQuery === '') return
      const [ err, res ] = await to(httpProgress.get('users', {
        params: { username: this.userQuery }
      }))
      err ? this.$emit('error', err) : this.$emit('userList', res.data)
    }
  },
  created () {
    this.debouncedUserQuery = debounce(this.findUsers, 500)
  }
}
</script>
