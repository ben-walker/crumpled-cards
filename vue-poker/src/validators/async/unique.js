import to from 'await-to-js'
import { http } from '@/config/axios'

export default (field) => async (value, vm) => {
  if (value === '') return true
  const [ err, res ] = await to(http.get(`${field}Registered`, {
    params: { [field]: value }
  }))
  if (err) throw err
  return Boolean(!res.data)
}
