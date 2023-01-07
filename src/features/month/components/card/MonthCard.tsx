import { Bill } from '@features/bill'
import { useNavigation } from '@react-navigation/native'
import { HomeStackNavigationProps, RouteName } from '@routes/Routes.types'
import RealmContext from '@shared/RealmContext'
import dayjs from 'dayjs'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { MonthCardProps } from './MonthCard.types'

function MonthCard(monthCardProps: MonthCardProps) {
  const { monthNumber, year } = monthCardProps
  const { useQuery } = RealmContext

  const month = dayjs().month(monthNumber).format('MMM')
  const navigation = useNavigation<HomeStackNavigationProps>()
  const handlePress = () =>
    navigation.push(RouteName.Day, { monthNumber, year })

  const startOfMonth = dayjs(`${Number(year)}-${monthNumber + 1}`).toDate()
  const endOfMonth = dayjs(`${Number(year)}-${monthNumber + 2}`).toDate()
  const summary = useQuery(Bill)
    .filtered('createdAt BETWEEN {$0, $1}', startOfMonth, endOfMonth)
    .sum('value')
    .toFixed(2) // TODO: remove toFixed functions
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
