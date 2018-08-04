import Vue from 'vue'
import VuelidateErrorExtractor from 'vuelidate-error-extractor'
import Template from './Template.vue'
import messages from './messages'

Vue.use(VuelidateErrorExtractor, {
  template: Template,
  messages: messages
})
