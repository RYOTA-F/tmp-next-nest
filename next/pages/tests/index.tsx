/**
 * Pages/TestPage
 * @package Pages
 */
import React, { useState } from 'react'
import { NextPage } from 'next'
/* api */
import { getTests } from '@/api'
/* components */
import TestListItem from '@/components/tests/ListItem'
/* elements */
import { Container, ListContainer, ApiButton, ClearButton } from './elements'
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

  /**
   * Clearボタンをクリック
   */
  const handleClickClear = () => {
    setTests([])
  }

  return (
    <Container>
      <ListContainer>
        {tests.map((v, i) => (
          <TestListItem key={i} test={v} />
        ))}
      </ListContainer>

      <ApiButton onClick={handleClickApi}>API</ApiButton>
      <ClearButton onClick={handleClickClear}>Clear</ClearButton>
    </Container>
  )
}

export default TestPage
