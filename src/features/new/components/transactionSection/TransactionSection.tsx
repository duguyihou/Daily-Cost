import React from 'react'
import { StyleSheet, View } from 'react-native'

import { TransactionTitle } from '../transactionTitle'
import { TransactionValue } from '../transactionValue'

function TransactionSection() {
  return (
    <View style={styles.container}>
      <TransactionTitle />
      <TransactionValue />
    </View>
  )
}
export default TransactionSection

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: 'column',
  },
})
