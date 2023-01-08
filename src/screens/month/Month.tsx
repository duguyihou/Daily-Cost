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
    params: { year = dayjs().year().toString(), ignore },
  } = useRoute<HomeRouteType<RouteName.Month>>()

  const navigation = useNavigation<HomeStackNavigationProps>()
  useLayoutEffect(() => navigation.setOptions({ title: year }))

  useEffect(() => {
    if (!ignore) {
      const monthNumber = dayjs().month()
      navigation.push(RouteName.Day, { monthNumber, year })
    }
  })

  return <MonthCardList year={year} />
}
export default Month
