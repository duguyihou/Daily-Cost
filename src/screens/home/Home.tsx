import { BillCard, PlusButton } from '@features/bill'
import { MonthCardList } from '@features/month/components'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const cards = [
  {
    id: 0,
    title: 'Coles',
    value: '29.90',
    createdAt:
      'Mon Jan 02 2023 19:03:16 GMT+1100 (Australian Eastern Daylight Time)',
  },
  {
    id: 1,
    title: 'WWS',
    value: '29.90',
    createdAt:
      'Mon Jan 02 2023 19:03:16 GMT+1100 (Australian Eastern Daylight Time)',
  },
  {
    id: 2,
    title: 'KFC',
    value: '13.90',
    createdAt:
      'Mon Jan 02 2023 19:03:16 GMT+1100 (Australian Eastern Daylight Time)',
  },
]
function Home() {
  return (
    <View style={styles.container}>
      <MonthCardList />
      {cards.map(({ id, title, value }) => (
        <BillCard key={id} title={title} value={value} />
      ))}
      <PlusButton />
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
