export default (error) => {
  if (error.response) return error.response.statusText
  else if (error.request) return 'Server Connection Failed.'
  else return error.message
}
