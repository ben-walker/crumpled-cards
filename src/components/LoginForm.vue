<template lang="pug">
  #loginForm
    form(@submit.prevent="submit" novalidate)

      b-field(label="Username or Email"
      :type="fieldType('identifier')"
      :message="validation.firstError('identifier')")
        b-input(v-model.trim="identifier" type="text" rounded ref="identifier")

      b-field(label="Password"
      :type="fieldType('password')"
      :message="validation.firstError('password')")
        b-input(v-model="password" type="password" placeholder="••••••••" rounded password-reveal)

      nav.level
        .level-left
          .level-item
            a(@click="forgotPassword") Forgot Password?
        .level-right
          .level-item
            button.button.is-light(type="submit") Log In
</template>

<script>
import SimpleVueValidator from 'simple-vue-validator'
import FieldType from '@/mixins/FieldType'

const Validator = SimpleVueValidator.Validator

export default {
  name: 'loginForm',
  data () {
    return {
      identifier: '',
      password: ''
    }
  },
  mixins: [
    FieldType
  ],
  computed: {
    authPayload () {
      return {
        identifier: this.identifier,
        password: this.password
      }
    }
  },
  validators: {
    identifier: {
      cache: true,
      debounce: 200,
      validator: function (value) {
        let test = Validator.value(value).required()
        if (!test.hasImmediateError()) {
          test.custom(() => {
            return new Promise((resolve, reject) => {
              this.$http.get('identifierExists', {
                params: { identifier: this.identifier }
              })
                .then(res => {
                  res.data.userFound
                    ? resolve()
                    : resolve('User not found.')
                })
                .catch(err => reject(err))
            })
          })
        }
        return test
      }
    },
    password: (value) => {
      return Validator.value(value).required()
    }
  },
  methods: {
    submit () {
      this.$validate().then(success => {
        if (success) this.$emit('login', this.authPayload)
      })
    },
    forgotPassword () {
      this.$validate('identifier').then(success => {
        if (success) this.$emit('forgotPassword', this.identifier)
      })
    }
  },
  mounted () {
    this.$refs.identifier.focus()
  }
}
</script>
