import minDelay from 'p-min-delay'

const userExists = (value, vm) => {
  if (value === '') return true
  return minDelay(new Promise((resolve, reject) => {
    vm.$http.get('identifierExists', {
      params: { identifier: value }
    })
      .then(res => resolve(res.data))
      .catch(err => reject(err))
  }), 1000)
}

const unique = (field) => (value, vm) => {
  if (value === '') return true
  return minDelay(new Promise((resolve, reject) => {
    vm.$http.get(`${field}Registered`, {
      params: { [field]: value }
    })
      .then(res => resolve(!res.data))
      .catch(err => reject(err))
  }), 1000)
}

export { userExists, unique }
