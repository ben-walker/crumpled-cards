<template lang="pug">
  #login
    .box
      h2.subtitle.is-4.has-text-primary.is-unselectable Welcome Back
      form(@submit.prevent="submit" novalidate)
        form-group(:validator="$v.identifier" label="Username or Email" attribute="Identifier")
          b-input(
            :value="$v.identifier.$model"
            @input="debounceInput('identifier', $event)"
            v-focus
            :loading="$v.identifier.$pending"
          )
        form-group(:validator="$v.password" label="Password")
          b-input(
            v-model="$v.password.$model"
            type="password"
            placeholder="••••••••"
          )
        nav.level
          .level-left
            a.level-item.is-unselectable(@click="forgotPassword") Forgot your password?
          .level-right
            button.level-item.button.is-primary(type="submit" :disabled="loading")
              b-icon(pack="fas" icon="lock" size="is-small")
              span Log In
    p.is-unselectable Need an account? #[router-link(:to="{ name: 'signup' }") Sign Up]
</template>

<script>
import { validationMixin } from 'vuelidate'
import { debounceInput } from '@/mixins'
import { required } from 'vuelidate/lib/validators'
import { userExists } from '@/validators'

export default {
  name: 'login',
  data () {
    return {
      identifier: '',
      password: ''
    }
  },
  props: {
    loading: {
      type: Boolean,
      required: true
    }
  },
  mixins: [
    validationMixin,
    debounceInput
  ],
  validations () {
    return {
      identifier: { required, userExists },
      password: { required }
    }
  },
  methods: {
    submit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$emit('logIn', {
          identifier: this.identifier,
          password: this.password
        })
      }
    },
    forgotPassword () {
      this.$v.identifier.$touch()
      if (!this.$v.identifier.$invalid) {
        this.$dialog.alert({
          title: 'Instructions Sent',
          message: `Password reset instructions sent to <b>${this.identifier}</b>, check your inbox and spam folder.`
        })
      }
    }
  }
}
</script>
