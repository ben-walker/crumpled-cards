<template lang="pug">
  #userSearch
    b-field
      b-input(
        v-model="userQuery"
        placeholder="Search..."
        type="search"
        expanded
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
