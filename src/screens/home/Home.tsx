import { BillCard, PlusButton } from '@features/bill'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const cards = [
  { id: 0, title: 'Coles', value: '29.90' },
  { id: 1, title: 'WWS', value: '29.90' },
  { id: 2, title: 'KFC', value: '13.90' },
]
function Home() {
  return (
    <View style={styles.container}>
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
