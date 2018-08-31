import to from 'await-to-js'
import { axios } from '@/config/axios'

export default (field) => async (value, vm) => {
  if (value === '') return true
  const [ err, res ] = await to(axios.get(`${field}Registered`, {
    params: { [field]: value }
  }))
  if (err) throw err
  return Boolean(!res.data)
}
