<template lang="pug">
  #login
    .box
      h2.subtitle.is-4.has-text-grey Welcome Back
      form(@submit.prevent="submit" novalidate)
        form-group(:validator="$v.identifier" label="Username or Email" attribute="Identifier")
          b-input(
            :value="$v.identifier.$model"
            @input="debounceInput('identifier', $event)"
            v-focus
            :loading="$v.identifier.$pending"
            :disabled="loading"
          )
        form-group(:validator="$v.password" label="Password")
          b-input(
            v-model="$v.password.$model"
            type="password"
            placeholder="••••••••"
            :disabled="loading"
          )
        nav.level
          .level-left
            a.level-item(@click="forgotPassword") Forgot your password?
          .level-right
            button.level-item.button.is-light(type="submit" :class="{ 'is-loading': loading }") Log In
    p Need an account? #[InternalLink(:link="signupLink")]
</template>

<script>
import { validationMixin } from 'vuelidate'
import { debounceInput, toast } from '@/mixins'
import { required } from 'vuelidate/lib/validators'
import { userExists } from '@/validators'
import InternalLink from '@/components/InternalLink.vue'

export default {
  name: 'login',
  data () {
    return {
      identifier: '',
      password: '',
      signupLink: { route: '/authenticate/signup', color: 'primary', text: 'Sign Up' }
    }
  },
  computed: {
    authPayload () {
      return {
        identifier: this.identifier,
        password: this.password
      }
    },
    loading () {
      return this.$store.state.user.loading
    }
  },
  components: {
    InternalLink
  },
  mixins: [
    validationMixin,
    debounceInput,
    toast
  ],
  validations: {
    identifier: {
      required,
      userExists
    },
    password: {
      required
    }
  },
  methods: {
    submit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store.dispatch('user/login', this.authPayload)
          .catch(err => this.dangerToast(err))
      }
    },
    forgotPassword () {
      this.$v.identifier.$touch()
      if (!this.$v.identifier.$invalid) this.$emit('forgotPassword', this.identifier)
    }
  }
}
</script>
