import { Button, ButtonSize } from '@components/elements'
import useNewTransactionStore from '@features/new/store'
import { faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { theme } from '@shared/theme'
import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

function TransactionTitle() {
  const { transaction, setTitle } = useNewTransactionStore()
  return (
    <View style={styles.container}>
      <Button icon={faCircleDot} size={ButtonSize.LG} />
      <TextInput
        value={transaction.title}
        style={styles.input}
        placeholder="Transaction Name"
        blurOnSubmit={false}
        onChangeText={setTitle}
      />
    </View>
  )
}
export default TransactionTitle

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
