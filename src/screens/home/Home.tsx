import { Layout } from '@components/layout'
import { YearCardList } from '@features/year'
import { useNavigation } from '@react-navigation/native'
import { HomeStackNavigationProps, RouteName } from '@routes/Routes.types'
import dayjs from 'dayjs'
import React, { useEffect } from 'react'

function Home() {
  const navigation = useNavigation<HomeStackNavigationProps>()
  useEffect(() => {
    const year = dayjs().format('YYYY')
    navigation.push(RouteName.Month, { year, ignore: false })
  })

  return (
    <Layout>
      <YearCardList />
    </Layout>
  )
}
export default Home
