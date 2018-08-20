import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import config from './config'

Vue.use(VueAxios, axios.create(config))
