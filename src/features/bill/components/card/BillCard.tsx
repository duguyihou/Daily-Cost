import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Card as CardProps } from './BillCard.types'

function BillCard(cardProps: CardProps) {
  const { title, value } = cardProps
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  )
}
export default BillCard

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 8,
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
