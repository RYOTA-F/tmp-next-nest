/**
 * pages/Test
 * @package Pages
 */
import React, { useState } from 'react'
import { NextPage } from 'next'
/* api */
import { getTests } from '@/api'
/* components */
import TestListItem from '@/components/tests/ListItem'
/* types */
import { Test } from '@/types/test'

const TestPage: NextPage = () => {
  const [tests, setTests] = useState<Test[]>([])

  /**
   * APIボタンをクリック
   */
  const handleClickApi = async () => {
    const res = await getTests()
    setTests(res)
  }

  return (
    <>
      TestPage
      <div>
        {tests.map((v, i) => (
          <TestListItem key={i} test={v} />
        ))}

        <button onClick={handleClickApi}>API</button>
      </div>
    </>
  )
}

export default TestPage
