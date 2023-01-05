import { MonthCardList } from '@features/month'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
  HomeRouteType,
  HomeStackNavigationProps,
  RouteName,
} from '@routes/Routes.types'
import dayjs from 'dayjs'
import React, { useEffect, useLayoutEffect } from 'react'

function Month() {
  const {
    params: { year, ignore },
  } = useRoute<HomeRouteType<RouteName.Month>>()

  const navigation = useNavigation<HomeStackNavigationProps>()
  useLayoutEffect(() => navigation.setOptions({ title: year }))

  useEffect(() => {
    if (!ignore) {
      const month = dayjs().format('MMMM')
      navigation.push(RouteName.Day, { month })
    }
  })

  return <MonthCardList />
}
export default Month
