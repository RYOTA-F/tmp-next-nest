/**
 * Pages/TestPage
 * @package Pages
 */
import React, { useState } from 'react'
import { NextPage } from 'next'
import { Button } from '@mantine/core'
import { useToggle } from '@mantine/hooks'
/* api */
import { getTests } from '@/api'
/* components */
import TestListItem from '@/components/tests/ListItem'
/* types */
import { Test } from '@/types/test'

const TestPage: NextPage = () => {
  const [tests, setTests] = useState<Test[]>([])
  const [value, toggle] = useToggle('blue', ['blue', 'orange'])

  /**
   * APIボタンをクリック
   */
  const handleClickApi = async () => {
    const res = await getTests()
    setTests(res)
  }

  /**
   * Clearボタンをクリック
   */
  const handleClickClear = () => {
    setTests([])
  }

  return (
    <>
      <button onClick={handleClickApi}>click</button>
      {tests.map((v, i) => (
        <TestListItem key={i} test={v} />
      ))}
      <div>
        <h1 className="text-3xl  text-blue-900">Hello world!</h1>
        <Button color={value} onClick={() => toggle()}>
          {value}
        </Button>
      </div>
    </>
  )
}

export default TestPage
