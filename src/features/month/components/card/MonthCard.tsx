import { useMonthSummary } from '@features/month'
import { useNavigation } from '@react-navigation/native'
import { HomeStackNavigationProps, RouteName } from '@routes/Routes.types'
import dayjs from 'dayjs'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { MonthCardProps } from './MonthCard.types'

function MonthCard(monthCardProps: MonthCardProps) {
  const { monthNumber, year } = monthCardProps

  const month = dayjs().month(monthNumber).format('MMM')
  const navigation = useNavigation<HomeStackNavigationProps>()
  const handlePress = () =>
    navigation.push(RouteName.Day, { monthNumber, year })

  const monthSummary = useMonthSummary(year, monthNumber)
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={1}>
      <Text style={styles.month}>{month}</Text>
      <Text style={styles.summary}>{monthSummary}</Text>
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
