import { PlusButton } from '@features/bill'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import RootRoute from './RootRoute'

function Routes() {
  return (
    <NavigationContainer>
      <RootRoute />
      <PlusButton />
    </NavigationContainer>
  )
}

export default Routes
