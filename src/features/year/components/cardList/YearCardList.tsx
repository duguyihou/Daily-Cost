import { Bill } from '@features/bill'
import RealmContext from '@shared/RealmContext'
import dayjs from 'dayjs'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import YearCard from '../card/YearCard'

function YearCardList() {
  const { useQuery } = RealmContext
  const currentYear = dayjs('2023-01-01T00:00:00').toDate()
  const nextYear = dayjs('2024-01-01T00:00:00').toDate()
  const summary = useQuery(Bill)
    .filtered('createdAt BETWEEN {$0, $1}', currentYear, nextYear)
    .sum('value')
    .toFixed(2) // TODO: remove toFixed functions
  return (
    <View style={styles.container}>
      <YearCard year={dayjs().format('YYYY')} summary={summary} />
    </View>
  )
}
export default YearCardList

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
})
