import { useYears } from '@features/year'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import YearCard from '../card/YearCard'

function YearCardList() {
  const years = useYears()

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
