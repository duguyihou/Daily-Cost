import dayjs from 'dayjs'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import YearCard from '../card/YearCard'

function YearCardList() {
  const data = {
    year: dayjs().format('YYYY'),
    summary: '1290.90',
  }
  return (
    <View style={styles.container}>
      <YearCard year={data.year} summary={data.summary} />
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
