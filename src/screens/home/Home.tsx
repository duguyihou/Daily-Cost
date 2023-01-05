import BillContext, { Bill } from '@features/bill/models/Bill'
import { YearCardList } from '@features/year'
import { useNavigation } from '@react-navigation/native'
import { HomeStackNavigationProps, RouteName } from '@routes/Routes.types'
import dayjs from 'dayjs'
import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'

function Home() {
  const navigation = useNavigation<HomeStackNavigationProps>()
  useEffect(() => {
    const year = dayjs().format('YYYY')
    navigation.push(RouteName.Month, { year, ignore: false })
  })
  const { useQuery } = BillContext
  const bills = useQuery(Bill)
  console.log('🐵 bills ------ ', bills)
  return (
    <View style={styles.container}>
      <YearCardList />
    </View>
  )
}
export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})
