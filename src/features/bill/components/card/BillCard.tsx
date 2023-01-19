import { useNavigation } from '@react-navigation/native'
import { HomeStackNavigationProps, RouteName } from '@routes/Routes.types'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { Card } from './BillCard.types'

function BillCard(card: Card) {
  const { title, value, id } = card
  const navigation = useNavigation<HomeStackNavigationProps>()
  const handlePress = () => {
    navigation.push(RouteName.Edit, { id: id.toHexString() })
  }
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={1}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </TouchableOpacity>
  )
}
export default BillCard

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
  },
  value: {
    fontSize: 16,
  },
})
