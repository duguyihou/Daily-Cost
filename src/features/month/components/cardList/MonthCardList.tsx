import dayjs from 'dayjs'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import MonthCard from '../card/MonthCard'

function MonthCardList() {
  const data = {
    month: dayjs().format('MMMM YYYY'),
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
