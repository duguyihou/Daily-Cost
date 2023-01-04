import { PlusButton } from '@features/bill'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Day } from '@screens/day'
import { Home } from '@screens/home'
import React from 'react'

import { HomeStackParamList, RouteName } from './Routes.types'

const HomeStack = createNativeStackNavigator<HomeStackParamList>()
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={RouteName.Home} component={Home} />
      <HomeStack.Screen name={RouteName.Day} component={Day} />
    </HomeStack.Navigator>
  )
}

const RootTab = createBottomTabNavigator()

function Routes() {
  return (
    <NavigationContainer>
      <RootTab.Navigator screenOptions={{ headerShown: false }}>
        <RootTab.Screen
          name={RouteName.HomeStack}
          component={HomeStackScreen}
          options={{ title: RouteName.Home }}
        />
      </RootTab.Navigator>
      <PlusButton />
    </NavigationContainer>
  )
}

export default Routes
