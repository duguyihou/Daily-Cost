import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { MonthCardProps } from './MonthCard.types'

function MonthCard(monthCardProps: MonthCardProps) {
  const { month, summary } = monthCardProps

  return (
    <View style={styles.container}>
      <Text style={styles.month}>{month}</Text>
      <Text style={styles.summary}>{summary}</Text>
    </View>
  )
}
export default MonthCard

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  month: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  summary: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
  },
})
