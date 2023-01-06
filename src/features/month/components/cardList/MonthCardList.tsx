import { Bill } from '@features/bill'
import RealmContext from '@shared/RealmContext'
import dayjs from 'dayjs'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import MonthCard from '../card/MonthCard'
import { MonthCardListProps } from './MonthCardList.types'

function MonthCardList({ year }: MonthCardListProps) {
  const { useQuery } = RealmContext
  const currentMonth = dayjs(`${year}-01-01T00:00:00`).toDate()
  const nextMonth = dayjs(`${year}-01-31T00:00:00`).toDate()
  const summary = useQuery(Bill)
    .filtered('createdAt BETWEEN {$0, $1}', currentMonth, nextMonth)
    .sum('value')
    .toFixed(2) // TODO: remove toFixed functions
  return (
    <View style={styles.container}>
      <MonthCard
        month={dayjs().format('MMMM YYYY')}
        summary={summary}
        year={year}
      />
    </View>
  )
}
export default MonthCardList

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
})
