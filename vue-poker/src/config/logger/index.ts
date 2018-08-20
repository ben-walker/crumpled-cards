import Vue from 'vue'
import VueLogger from 'vuejs-logger'

const debug: boolean = process.env.NODE_ENV !== 'production'

Vue.use(VueLogger, {
  isEnabled: debug,
  logLevel: 'debug',
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  separator: '||',
  showConsoleColors: true
})
