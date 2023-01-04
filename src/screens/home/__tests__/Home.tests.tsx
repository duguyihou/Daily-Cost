import { render } from '@testing-library/react-native'
import React from 'react'

import Home from '../Home'

jest.mock('@features/month', () => ({
  MonthCardList: 'MonthCardList',
}))

test('home', () => {
  const home = render(<Home />)
  expect(home).toMatchSnapshot()
})
