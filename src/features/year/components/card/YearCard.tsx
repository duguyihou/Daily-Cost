import { Bill } from '@features/bill'
import { useNavigation } from '@react-navigation/native'
import { HomeStackNavigationProps, RouteName } from '@routes/Routes.types'
import RealmContext from '@shared/RealmContext'
import dayjs from 'dayjs'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { YearCardProps } from './YearCard.types'

function YearCard(yearCardProps: YearCardProps) {
  const { year } = yearCardProps

  const { useQuery } = RealmContext
  const navigation = useNavigation<HomeStackNavigationProps>()
  const handlePress = () =>
    navigation.push(RouteName.Month, { year, ignore: true })

  const startOfYear = dayjs(`${Number(year)}`).toDate()
  const endOfYear = dayjs(`${Number(year) + 1}`).toDate()
  const summary = useQuery(Bill)
    .filtered('createdAt BETWEEN {$0, $1}', startOfYear, endOfYear)
    .sum('value')
    .toFixed(2) // TODO: remove toFixed functions

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={1}>
      <Text style={styles.year}>{year}</Text>
      <Text style={styles.summary}>{summary}</Text>
    </TouchableOpacity>
  )
}
export default YearCard

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  year: {
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
