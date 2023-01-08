import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { TransactionTitle } from '../transactionTitle'
import { TransactionValue } from '../transactionValue'

function TransactionSection() {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState('')
  console.log('🐵 title ------ ', title)
  console.log('🐵 value ------ ', value)
  return (
    <View style={styles.container}>
      <TransactionTitle title={title} setTitle={setTitle} />
      <TransactionValue value={value} setValue={setValue} />
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
