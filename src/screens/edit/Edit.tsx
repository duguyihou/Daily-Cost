import { useBillQuery } from '@features/bill/hooks'
import { TransactionSection } from '@features/new'
import { useRoute } from '@react-navigation/native'
import { HomeRouteType, RouteName } from '@routes/Routes.types'
import React from 'react'
import { View } from 'react-native'

function Edit() {
  const {
    params: { id },
  } = useRoute<HomeRouteType<RouteName.Edit>>()
  const bill = useBillQuery(id)

  return <View>{/* <TransactionSection transaction={bill} /> */}</View>
}

export default Edit
