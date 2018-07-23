import Vue from 'vue'
import VueLogger from 'vuejs-logger'

const debug = process.env.NODE_ENV !== 'production'

const options = {
  isEnabled: debug,
  logLevel: 'debug',
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  separator: '//',
  showConsoleColors: true
}

Vue.use(VueLogger, options)
