import { useMonths } from '@features/month'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import MonthCard from '../card/MonthCard'
import { MonthCardListProps } from './MonthCardList.types'

function MonthCardList({ year }: MonthCardListProps) {
  const months = useMonths(year)

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
    paddingHorizontal: 20,
  },
})
