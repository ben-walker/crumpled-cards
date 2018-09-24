import Vue from 'vue'
import config from 'buefy/src/utils/config'
import { Field, Input, Icon, Toast, Modal, Upload, Dropdown, Tooltip } from 'buefy/dist/components'

Vue.use(Field)
Vue.use(Input)
Vue.use(Icon)
Vue.use(Toast)
Vue.use(Modal)
Vue.use(Upload)
Vue.use(Dropdown)
Vue.use(Tooltip)
config.defaultIconPack = 'fas'
