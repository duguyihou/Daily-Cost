import { Bill } from '@features/bill'
import RealmContext from '@shared/RealmContext'
import dayjs from 'dayjs'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import YearCard from '../card/YearCard'

function YearCardList() {
  const { useQuery } = RealmContext
  const years = [
    ...new Set(useQuery(Bill).map(bill => dayjs(bill.createdAt).year())),
  ]

  return (
    <View style={styles.container}>
      {years.map(year => (
        <YearCard key={year} year={year.toString()} />
      ))}
    </View>
  )
}
export default YearCardList

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
  },
})
