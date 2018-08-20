import axios from '@/config/axios'

export default (identifier) => (value, vm) => {
  if (value === '' || vm.$v.identifier.$invalid) return true
  return new Promise((resolve, reject) => {
    axios.post('passwordMatches', {
      identifier,
      password: value
    })
      .then(res => resolve(res.data))
      .catch(err => reject(err))
  })
}
