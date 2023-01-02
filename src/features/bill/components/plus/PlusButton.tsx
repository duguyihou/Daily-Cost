import { Button, ButtonSize } from '@components/elements'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { theme } from '@shared/theme'
import React from 'react'
import { StyleSheet } from 'react-native'

function PlusButton() {
  const handlePlus = () => console.log('plus')
  return (
    <Button
      icon={faPlus}
      size={ButtonSize.XL}
      onPress={handlePlus}
      style={styles.button}
    />
  )
}
export default PlusButton

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: theme.bg.primary,
    padding: 10,
    borderRadius: 30,
  },
})
