import { PlusButton } from '@features/bill'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Day } from '@screens/day'
import { Home } from '@screens/home'
import { Month } from '@screens/month'
import { New } from '@screens/new'
import React from 'react'

import { HomeStackParamList, RouteName } from './Routes.types'

const HomeStack = createNativeStackNavigator<HomeStackParamList>()
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Group>
        <HomeStack.Screen name={RouteName.Home} component={Home} />
        <HomeStack.Screen name={RouteName.Month} component={Month} />
        <HomeStack.Screen name={RouteName.Day} component={Day} />
      </HomeStack.Group>
      <HomeStack.Group screenOptions={{ presentation: 'modal' }}>
        <HomeStack.Screen name={RouteName.New} component={New} />
      </HomeStack.Group>
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
