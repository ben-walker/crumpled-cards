import Vue from 'vue'
import VuelidateErrorExtractor from 'vuelidate-error-extractor'
import template from './Template.vue'
import messages from './messages'

Vue.use(VuelidateErrorExtractor, {
  template,
  messages
})
