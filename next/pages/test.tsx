/**
 * pages/Test
 * @package Pages
 */
import React from 'react'
import { NextPage } from 'next'

const TestPage: NextPage = () => {
  const handleClickTests = async () => {
    console.log('handleClickTests')
  }

  return (
    <>
      TestPage
      <div>
        <button onClick={handleClickTests}>API</button>
      </div>
    </>
  )
}

export default TestPage
