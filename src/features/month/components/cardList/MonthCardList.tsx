import { date } from '@utils/date'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import MonthCard from '../card/MonthCard'

function MonthCardList() {
  const data = {
    month: date.getMonth(
      'Mon Jan 02 2020 19:03:16 GMT+1100 (Australian Eastern Daylight Time)',
    ),
    summary: '109.90',
  }
  return (
    <View style={styles.container}>
      <MonthCard month={data.month} summary={data.summary} />
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
