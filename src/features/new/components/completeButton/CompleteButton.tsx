import { Button, ButtonSize } from '@components/elements'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native'
import { HomeStackNavigationProps } from '@routes/Routes.types'
import React from 'react'

function CompleteButton() {
  const navigation = useNavigation<HomeStackNavigationProps>()
  const handlePlus = () => navigation.goBack()
  return <Button icon={faCheck} size={ButtonSize.XL} onPress={handlePlus} />
}
export default CompleteButton
