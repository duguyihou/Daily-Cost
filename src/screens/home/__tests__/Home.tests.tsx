import { render } from '@testing-library/react-native'
import React from 'react'

import Home from '../Home'

test('home', () => {
  const home = render(<Home />)
  expect(home).toMatchSnapshot()
})
