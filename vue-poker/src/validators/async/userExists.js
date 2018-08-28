import to from 'await-to-js'
import axios from '@/config/axios'

export default async (value, vm) => {
  if (value === '') return true
  const [ err, res ] = await to(axios.get('identifierExists', {
    params: { identifier: value }
  }))
  if (err) throw err
  return Boolean(res.data)
}
