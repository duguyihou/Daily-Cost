import { render } from '@testing-library/react-native'
import React from 'react'

import Home from '../Home'

jest.mock('@features/bill', () => ({
  Card: jest.fn(),
}))
test('home', () => {
  const home = render(<Home />)
  expect(home).toMatchSnapshot()
})
