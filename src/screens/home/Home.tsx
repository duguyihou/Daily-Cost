import { MonthCardList } from '@features/month'
import React from 'react'
import { StyleSheet, View } from 'react-native'

function Home() {
  return (
    <View style={styles.container}>
      <MonthCardList />
    </View>
  )
}
export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})
