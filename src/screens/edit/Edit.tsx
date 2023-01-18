import { useRoute } from '@react-navigation/native'
import { HomeRouteType, RouteName } from '@routes/Routes.types'
import React from 'react'
import { Text, View } from 'react-native'

function Edit() {
  const {
    params: { card },
  } = useRoute<HomeRouteType<RouteName.Edit>>()
  console.log('🐵 card ------ ', card)
  return (
    <View>
      <Text>Edit</Text>
    </View>
  )
}

export default Edit
