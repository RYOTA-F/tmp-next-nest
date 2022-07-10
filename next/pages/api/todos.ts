/* types */
import { TParamMethod, TParams } from '@type/api'

/**
 * Todo: fetchTodoAPI
 */
const fetchTodoApi = async (
  method: TParamMethod,
  endpoint: string,
  body?: any
) => {
  const params: TParams = {
    method: method,
    headers: { 'Content-Type': 'application/json' },
  }
  if (body) params.body = JSON.stringify(body)

  const res = await fetch(endpoint, params)
  const resJson = await res.json()

  return resJson
}
