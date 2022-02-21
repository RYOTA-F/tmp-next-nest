/**
 * API
 * @package api
 */
import axios from './axios'
/* types */
import { Test } from '@/types/test'

/**
 * テストデータ一覧を取得
 */
export const getTests = async () => {
  const res = await axios.get<Test[]>('tests')

  if (!res || !res.data) throw new Error('tests の取得に失敗しました')
  return res.data
}
