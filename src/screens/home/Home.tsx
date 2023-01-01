import { Card } from '@features/bill'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function Home() {
  return (
    <View style={styles.container}>
      <Card />
      <Text>Home</Text>
    </View>
  )
}
export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
