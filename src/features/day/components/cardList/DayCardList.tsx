import { BillCard } from '@features/bill'
import { DayTransaction } from '@features/day'
import RealmContext from '@shared/RealmContext'
import React from 'react'
import { SectionList, View } from 'react-native'

import { cards } from './fakeData'
import SectionHeader from './SectionHeader'

function DayCardList() {
  const { useQuery } = RealmContext
  const dayTransactions = useQuery(DayTransaction)
  console.log('🐵 day ------ ', dayTransactions)
  return (
    <View>
      <SectionList
        sections={cards}
        renderItem={({ item }) => (
          <BillCard title={item.title} value={item.value} />
        )}
        renderSectionHeader={({ section: { date } }) => (
          <SectionHeader date={date} />
        )}
      />
    </View>
  )
}
export default DayCardList
