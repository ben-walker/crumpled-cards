import Vue from 'vue'

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import {
  faEye,
  faEyeSlash,
  faExclamationCircle,
  faSignOutAlt,
  faUser,
  faQuestionCircle,
  faUpload
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faEye,
  faEyeSlash,
  faExclamationCircle,
  faSignOutAlt,
  faUser,
  faQuestionCircle,
  faUpload
)

dom.watch()

Vue.component('font-awesome-icon', FontAwesomeIcon)
