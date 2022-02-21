/**
 * Components/tests/TestListItem
 * @package components
 */
import React from 'react'
/* types */
import { Test } from '@/types/test'
/* elements */
import { Container } from './elements'

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
    <Container>
      <div>ID: {test.id}</div>
      <div>Name: {test.name}</div>
      <div>Score: {test.score}</div>
    </Container>
  )
}

export default TestListItem
