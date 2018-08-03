import Vue from 'vue'
import VuelidateErrorExtractor from 'vuelidate-error-extractor'
import Template from './Template.vue'

Vue.use(VuelidateErrorExtractor, {
  template: Template
})
