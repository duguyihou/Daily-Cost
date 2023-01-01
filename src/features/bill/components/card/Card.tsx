import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function Card() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coles</Text>
      <Text style={styles.value}>$29.90</Text>
    </View>
  )
}
export default Card

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
  },
  value: {
    fontSize: 16,
  },
})
