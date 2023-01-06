import { RouteProp } from '@react-navigation/native'
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'

export type HomeStackParamList = {
  Home: undefined
  Month: { year: string; ignore: boolean }
  Day: { month: string; year: string }
}

export type HomeStackProps = NativeStackScreenProps<HomeStackParamList>
export type HomeStackNavigationProps =
  NativeStackNavigationProp<HomeStackParamList>

export type HomeRouteType<K extends keyof HomeStackParamList> = RouteProp<
  HomeStackParamList,
  K
>

export enum RouteName {
  HomeStack = 'HomeStack',
  Home = 'Home',
  Month = 'Month',
  Day = 'Day',
}
