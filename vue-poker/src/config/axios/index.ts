import axios, { AxiosInstance } from 'axios'

const http: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API,
  withCredentials: true
})

export default http
