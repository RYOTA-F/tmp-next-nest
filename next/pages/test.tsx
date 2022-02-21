/**
 * pages/Test
 * @package Pages
 */
import React, { useState } from 'react'
import { NextPage } from 'next'
/* api */
import { getTests } from '@/api'
/* types */
import { Test } from '@/types/test'

const TestPage: NextPage = () => {
  const [tests, setTests] = useState<Test[]>([])

  const handleClickTests = async () => {
    const res = await getTests()
    setTests(res)
  }

  return (
    <>
      TestPage
      <div>
        {tests.map((v, i) => (
          <div key={i}>
            <div>ID: {v.id}</div>
            <div>Name: {v.name}</div>
            <div>Score: {v.score}</div>
          </div>
        ))}

        <button onClick={handleClickTests}>API</button>
      </div>
    </>
  )
}

export default TestPage
