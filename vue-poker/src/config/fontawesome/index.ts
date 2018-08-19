import Vue from 'vue'

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye, faEyeSlash, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faEye, faEyeSlash, faExclamationCircle)
dom.watch()
Vue.component('font-awesome-icon', FontAwesomeIcon)
