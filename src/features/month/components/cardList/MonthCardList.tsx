import { Bill } from '@features/bill'
import RealmContext from '@shared/RealmContext'
import dayjs from 'dayjs'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import MonthCard from '../card/MonthCard'
import { MonthCardListProps } from './MonthCardList.types'

function MonthCardList({ year }: MonthCardListProps) {
  const { useQuery } = RealmContext
  const startOfYear = dayjs(`${Number(year)}`).toDate()
  const endOfYear = dayjs(`${Number(year) + 1}`).toDate()
  const months = [
    ...new Set(
      useQuery(Bill)
        .filtered('createdAt BETWEEN {$0, $1}', startOfYear, endOfYear)
        .map(bill => dayjs(bill.createdAt).month()),
    ),
  ]

  return (
    <View style={styles.container}>
      {months.map(month => (
        <MonthCard key={month} monthNumber={month} year={year} />
      ))}
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
