import Vue from 'vue'
import VueWait from 'vue-wait'

Vue.use(VueWait)

export default new VueWait({
  useVuex: true,
  vuexModuleName: 'wait',
  registerComponent: true,
  componentName: 'v-wait',
  registerDirective: true,
  directiveName: 'wait'
})
