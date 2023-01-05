import { useNavigation } from '@react-navigation/native'
import { HomeStackNavigationProps, RouteName } from '@routes/Routes.types'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { YearCardProps } from './YearCard.types'

function YearCard(yearCardProps: YearCardProps) {
  const { year, summary } = yearCardProps
  const navigation = useNavigation<HomeStackNavigationProps>()
  const handlePress = () =>
    navigation.push(RouteName.Month, { year, ignore: true })
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
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
