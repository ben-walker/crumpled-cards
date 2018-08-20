import axios from '@/config/axios'

export default (field) => (value, vm) => {
  if (value === '') return true
  return new Promise((resolve, reject) => {
    axios.get(`${field}Registered`, {
      params: { [field]: value }
    })
      .then(res => resolve(!res.data))
      .catch(err => reject(err))
  })
}
