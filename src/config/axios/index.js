import axios from 'axios'

const config = {
  baseURL: 'http://localhost:3000/api/',
  withCredentials: true
}

export default axios.create(config)
