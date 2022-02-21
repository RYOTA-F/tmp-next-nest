/**
 * Components/tests/TestListItem
 * @package components
 */
import React from 'react'
/* types */
import { Test } from '@/types/test'

/* props */
type TTestListItem = {
  test: Test
}

/**
 * @param props TTestListItem
 * @returns
 */
const TestListItem: React.FC<TTestListItem> = ({ test }) => {
  return (
    <>
      <div>{test.id}</div>
      <div>{test.name}</div>
      <div>{test.score}</div>
    </>
  )
}

export default TestListItem
