import { Button, ButtonSize } from '@components/elements'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { theme } from '@shared/theme'
import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

import { TransactionValueProps } from './TransactionValue.types'

function TransactionValue(transactionValueProps: TransactionValueProps) {
  const { value, setValue } = transactionValueProps
  return (
    <View style={styles.container}>
      <Button icon={faDollarSign} size={ButtonSize.LG} />
      <TextInput
        value={value}
        style={styles.input}
        placeholder="Transaction Value"
        blurOnSubmit={false}
        onChangeText={setValue}
        keyboardType="decimal-pad"
      />
    </View>
  )
}
export default TransactionValue

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginLeft: 10,
    padding: 10,
    fontSize: 16,
    backgroundColor: theme.bg.secondary,
  },
})
