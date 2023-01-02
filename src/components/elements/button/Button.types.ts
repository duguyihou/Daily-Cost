import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native'

export enum Size {
  SM = 16,
  MD = 20,
  LG = 24,
  XL = 28,
}

export type ButtonProps = {
  size?: Size
  icon: IconDefinition
  color?: string
  style?: StyleProp<ViewStyle>
  onPress?: (event: GestureResponderEvent) => void
}
