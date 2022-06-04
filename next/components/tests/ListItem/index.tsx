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
      <div>ID: {test.id}</div>
      <div>Name: {test.name}</div>
      <div>Score: {test.score}</div>
    </>
  )
}

export default TestListItem
