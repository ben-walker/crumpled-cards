import Vue from 'vue'

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import {
  faEye,
  faEyeSlash,
  faExclamationCircle
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faEye,
  faEyeSlash,
  faExclamationCircle
)

dom.watch()

Vue.component('font-awesome-icon', FontAwesomeIcon)
