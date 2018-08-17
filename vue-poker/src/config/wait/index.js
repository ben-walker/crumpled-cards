import Vue from 'vue'
import VueWait from 'vue-wait'
import config from './config'

Vue.use(VueWait)

const wait = new VueWait(config)

export default wait
