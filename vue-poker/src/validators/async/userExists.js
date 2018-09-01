import to from 'await-to-js'
import { http } from '@/config/axios'

export default async (value, vm) => {
  if (value === '') return true
  const [ err, res ] = await to(http.get('identifierExists', {
    params: { identifier: value }
  }))
  if (err) throw err
  return Boolean(res.data)
}
