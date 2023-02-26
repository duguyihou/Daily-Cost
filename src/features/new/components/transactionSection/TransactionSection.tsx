import { useTransactionStore } from '@features/bill'
import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'

import { TransactionTitle } from '../transactionTitle'
import { TransactionValue } from '../transactionValue'
import { TransactionSectionProps } from './TransactionSection.types'

function TransactionSection(transactionSectionProps: TransactionSectionProps) {
  const { transaction: existingTransaction } = transactionSectionProps
  const { transaction, setTitle, setValue, retrive } = useTransactionStore()
  useEffect(() => {
    if (existingTransaction) {
      retrive(existingTransaction)
    }
  }, [existingTransaction, retrive])
  const { title, value } = transaction
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
