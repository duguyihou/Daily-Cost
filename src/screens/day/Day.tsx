import { DayCardList } from '@features/day'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
  HomeRouteType,
  HomeStackNavigationProps,
  RouteName,
} from '@routes/Routes.types'
import React, { useLayoutEffect } from 'react'

function Day() {
  const {
    params: { month },
  } = useRoute<HomeRouteType<RouteName.Day>>()
  const navigation = useNavigation<HomeStackNavigationProps>()
  useLayoutEffect(() => navigation.setOptions({ title: month }))
  return <DayCardList />
}
export default Day
