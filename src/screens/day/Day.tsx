import { DayCardList } from '@features/day'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
  HomeRouteType,
  HomeStackNavigationProps,
  RouteName,
} from '@routes/Routes.types'
import dayjs from 'dayjs'
import React, { useLayoutEffect } from 'react'

function Day() {
  const {
    params: { monthNumber = dayjs().month(), year },
  } = useRoute<HomeRouteType<RouteName.Day>>()

  const navigation = useNavigation<HomeStackNavigationProps>()
  useLayoutEffect(() => {
    const title = dayjs().month(monthNumber).format('MMMM')
    navigation.setOptions({ title })
  })
  return <DayCardList monthNumber={monthNumber} year={year} />
}
export default Day
