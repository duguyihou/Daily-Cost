import { useNavigation } from '@react-navigation/native'
import { HomeStackNavigationProps, RouteName } from '@routes/Routes.types'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { MonthCardProps } from './MonthCard.types'

function MonthCard(monthCardProps: MonthCardProps) {
  const { month, summary } = monthCardProps
  const navigation = useNavigation<HomeStackNavigationProps>()
  const handlePress = () => navigation.push(RouteName.Day, { month })
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={1}>
      <Text style={styles.month}>{month}</Text>
      <Text style={styles.summary}>{summary}</Text>
    </TouchableOpacity>
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
