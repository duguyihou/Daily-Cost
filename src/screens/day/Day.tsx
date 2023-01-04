import { BillCard } from '@features/bill'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
  HomeRouteType,
  HomeStackNavigationProps,
  RouteName,
} from '@routes/RootRoute.types'
import React, { useLayoutEffect } from 'react'
import { View } from 'react-native'

const cards = [
  {
    id: 0,
    title: 'Coles',
    value: '29.90',
    createdAt:
      'Mon Jan 02 2023 19:03:16 GMT+1100 (Australian Eastern Daylight Time)',
  },
  {
    id: 1,
    title: 'WWS',
    value: '29.90',
    createdAt:
      'Mon Jan 02 2023 19:03:16 GMT+1100 (Australian Eastern Daylight Time)',
  },
  {
    id: 2,
    title: 'KFC',
    value: '13.90',
    createdAt:
      'Mon Jan 02 2023 19:03:16 GMT+1100 (Australian Eastern Daylight Time)',
  },
]
function Day() {
  const {
    params: { month },
  } = useRoute<HomeRouteType<RouteName.Day>>()
  const navigation = useNavigation<HomeStackNavigationProps>()
  useLayoutEffect(() => navigation.setOptions({ title: month }))
  return (
    <View>
      {cards.map(({ id, title, value }) => (
        <BillCard key={id} title={title} value={value} />
      ))}
    </View>
  )
}
export default Day
