import minDelay from 'p-min-delay'

const DELAY_MS = 500

const userExists = (value, vm) => {
  if (value === '') return true
  return minDelay(new Promise((resolve, reject) => {
    vm.$http.get('identifierExists', {
      params: { identifier: value }
    })
      .then(res => resolve(res.data))
      .catch(err => reject(err))
  }), DELAY_MS)
}

const unique = (field) => (value, vm) => {
  if (value === '') return true
  return minDelay(new Promise((resolve, reject) => {
    vm.$http.get(`${field}Registered`, {
      params: { [field]: value }
    })
      .then(res => resolve(!res.data))
      .catch(err => reject(err))
  }), DELAY_MS)
}

const passwordMatches = (identifier) => (value, vm) => {
  if (value === '') return true
  return minDelay(new Promise((resolve, reject) => {
    vm.$http.post('passwordMatches', {
      identifier,
      password: value
    })
      .then(res => resolve(res.data))
      .catch(err => reject(err))
  }), DELAY_MS)
}

export { userExists, unique, passwordMatches }
