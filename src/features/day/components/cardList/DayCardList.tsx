import { BillCard } from '@features/bill'
import { useDayTransactions } from '@features/day'
import React from 'react'
import { SectionList, View } from 'react-native'

import { DayCardListProps } from './DayCardList.types'
import SectionHeader from './SectionHeader'

function DayCardList({ monthNumber, year }: DayCardListProps) {
  const dayTransactions = useDayTransactions(year, monthNumber)

  return (
    <View>
      <SectionList
        sections={dayTransactions}
        renderItem={({ item }) => (
          <BillCard title={item.title} value={item.value} />
        )}
        renderSectionHeader={({ section: { day } }) => (
          <SectionHeader date={day} />
        )}
      />
    </View>
  )
}
export default DayCardList
