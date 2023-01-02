import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { TouchableOpacity } from 'react-native'

import { ButtonProps, Size } from './Button.types'

function Button(buttonProps: ButtonProps) {
  const { icon, onPress, size = Size.MD, color, style } = buttonProps

  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <FontAwesomeIcon icon={icon} color={color} size={size} />
    </TouchableOpacity>
  )
}
export default Button
