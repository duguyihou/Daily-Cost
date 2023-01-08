import { Button, ButtonSize } from '@components/elements'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native'
import { HomeStackNavigationProps } from '@routes/Routes.types'
import React from 'react'

function CloseButton() {
  const navigation = useNavigation<HomeStackNavigationProps>()
  const handlePlus = () => navigation.goBack()
  return <Button icon={faXmark} size={ButtonSize.XL} onPress={handlePlus} />
}
export default CloseButton
