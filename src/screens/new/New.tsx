import { CloseButton, CompleteButton, TransactionSection } from '@features/new'
import { useNavigation } from '@react-navigation/native'
import { HomeStackNavigationProps } from '@routes/Routes.types'
import React, { useLayoutEffect } from 'react'
import { View } from 'react-native'

function New() {
  const navigation = useNavigation<HomeStackNavigationProps>()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CloseButton />,
      headerTitle: 'New transaction',
      headerRight: () => <CompleteButton />,
    })
  })
  return (
    <View>
      <TransactionSection />
    </View>
  )
}
export default New
