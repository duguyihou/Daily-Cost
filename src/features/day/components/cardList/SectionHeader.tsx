import { theme } from '@shared/theme'
import dayjs from 'dayjs'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type SectionHeaderProps = {
  date: Date
}
function SectionHeader({ date }: SectionHeaderProps) {
  const title = dayjs(date).format('ddd DD')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}
export default SectionHeader
const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: theme.bg.secondary,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})
