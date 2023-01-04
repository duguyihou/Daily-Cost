import { BillCard } from '@features/bill'
import React from 'react'
import { View } from 'react-native'

import { cards } from './fakeData'

function DayCardList() {
  return (
    <View>
      {cards.map(({ id, title, value }) => (
        <BillCard key={id} title={title} value={value} />
      ))}
    </View>
  )
}
export default DayCardList
