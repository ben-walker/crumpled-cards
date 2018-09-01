import axios from 'axios'

const options = {
  baseURL: process.env.VUE_APP_API,
  withCredentials: true
}

export const http = axios.create(options)
export const httpProgress = axios.create(options)
