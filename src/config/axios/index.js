import axios from 'axios'
import config from './config'
import errorHandler from './error-handler'

const http = axios.create(config)

export {
  http as default,
  errorHandler
}
