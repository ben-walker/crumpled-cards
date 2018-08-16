export default (value, vm) => {
  if (value === '') return true
  return new Promise((resolve, reject) => {
    vm.$http.get('identifierExists', {
      params: { identifier: value }
    })
      .then(res => resolve(res.data))
      .catch(err => reject(err))
  })
}
