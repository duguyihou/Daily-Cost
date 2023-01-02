import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '@screens/home'
import React from 'react'

import { HomeStackParamList, RouteName } from './RootRoute.types'

const HomeStack = createNativeStackNavigator<HomeStackParamList>()
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={RouteName.Home} component={Home} />
    </HomeStack.Navigator>
  )
}

const RootTab = createBottomTabNavigator()
function RootRoute() {
  return (
    <RootTab.Navigator screenOptions={{ headerShown: false }}>
      <RootTab.Screen
        name={RouteName.HomeStack}
        component={HomeStackScreen}
        options={{ title: RouteName.Home }}
      />
    </RootTab.Navigator>
  )
}

export default RootRoute
