import { render } from '@testing-library/react-native'
import React from 'react'

import Home from '../Home'

jest.mock('@features/year', () => ({
  YearCardList: 'YearCardList',
}))

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ push: jest.fn() }),
}))
describe('Home', () => {
  test('home', () => {
    const home = render(<Home />)
    expect(home).toMatchSnapshot()
  })
})
