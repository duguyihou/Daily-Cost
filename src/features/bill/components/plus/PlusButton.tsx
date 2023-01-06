import { Button, ButtonSize } from '@components/elements'
import { Bill } from '@features/bill/models/Bill'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import RealmContext from '@shared/RealmContext'
import { theme } from '@shared/theme'
import React, { useCallback } from 'react'
import { StyleSheet } from 'react-native'

function PlusButton() {
  const { useRealm } = RealmContext
  const realm = useRealm()
  const handlePlus = useCallback(
    (title: string, value: string) => {
      if (value.trim() === '') return
      realm.write(() => {
        realm.create('Bill', Bill.generate(title, value))
      })
    },
    [realm],
  )
  return (
    <Button
      icon={faPlus}
      size={ButtonSize.XL}
      onPress={() => handlePlus('KFC', '13.98')}
      style={styles.button}
    />
  )
}
export default PlusButton

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 100,
    right: 30,
    backgroundColor: theme.bg.primary,
    padding: 10,
    borderRadius: 30,
  },
})
