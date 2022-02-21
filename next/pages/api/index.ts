/**
 * API
 * @package api
 */
import axios from './axios'

/**
 * テストデータ一覧を取得
 */
export const getTests = async () => {
  const res = await axios.get('tests')

  if (!res || !res.data) throw new Error('tests の取得に失敗しました')
  return res.data
}
