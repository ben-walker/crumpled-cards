export default (reject, error) => {
  if (error.response) reject(error.response.statusText)
  else if (error.request) reject(new Error('Server Connection Failed.'))
  else reject(error.message)
}
