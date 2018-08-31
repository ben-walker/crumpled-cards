import axios from 'axios'

const options = {
  baseURL: process.env.VUE_APP_API,
  withCredentials: true
}
const http = axios.create(options)
const axiosProgress = axios.create(options)

export {
  http as axios,
  axiosProgress
}
