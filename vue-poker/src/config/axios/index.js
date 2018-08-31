import axios from 'axios'

const http = axios.create({
  baseURL: process.env.VUE_APP_API,
  withCredentials: true
})

const axiosProgress = axios.create({
  baseURL: process.env.VUE_APP_API,
  withCredentials: true
})

export {
  http as axios,
  axiosProgress
}
