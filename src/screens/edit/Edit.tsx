import { useBillQuery } from '@features/bill/hooks'
import useTransactionStore from '@features/bill/store'
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
  const transaction = useTransactionStore(bill)
  return (
    <View>
      <TransactionSection />
    </View>
  )
}

export default Edit
