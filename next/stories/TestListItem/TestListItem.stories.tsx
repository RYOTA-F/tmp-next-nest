/**
 * Stories/TestListItem
 * @package stories
 */
import React from 'react'
import { ComponentMeta } from '@storybook/react'
/* components */
import TestListItem from '../../components/tests/ListItem'
/* mocks */
import { testData, TTestData } from './mock'

export default {
  title: 'MyApp/TestListItem',
  component: TestListItem,
  args: testData,
} as ComponentMeta<typeof TestListItem>

export const Default = (args: TTestData) => <TestListItem test={args} />
