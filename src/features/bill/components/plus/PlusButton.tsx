import { Button, ButtonSize } from '@components/elements'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native'
import { HomeStackNavigationProps, RouteName } from '@routes/Routes.types'
import { theme } from '@shared/theme'
import React from 'react'
import { StyleSheet } from 'react-native'

function PlusButton() {
  // const { useRealm } = RealmContext
  // const realm = useRealm()
  // const handlePlus = useCallback(
  //   (title: string, value: string) => {
  //     if (value.trim() === '') return
  //     realm.write(() => {
  //       realm.create('Bill', Bill.generate(title, value))
  //     })
  //   },
  //   [realm],
  // )
  const navigation = useNavigation<HomeStackNavigationProps>()
  const handlePlus = () => navigation.navigate(RouteName.New)
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
    bottom: 100,
    right: 30,
    backgroundColor: theme.bg.primary,
    padding: 10,
    borderRadius: 30,
  },
})
