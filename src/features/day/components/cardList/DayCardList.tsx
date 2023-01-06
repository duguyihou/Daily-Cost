import { Bill, BillCard } from '@features/bill'
import RealmContext from '@shared/RealmContext'
import dayjs from 'dayjs'
import React from 'react'
import { SectionList, View } from 'react-native'

import { DayCardListProps } from './DayCardList.types'
import { cards } from './fakeData'
import SectionHeader from './SectionHeader'

function DayCardList({ month, year }: DayCardListProps) {
  console.log('🐵 year ------ ', year)
  console.log('🐵 month ------ ', month)
  // const { useQuery } = RealmContext
  // const currentMonth = dayjs(`${year}-${month}-01T00:00:00`).toDate()
  // const nextMonth = dayjs(`${year}-${month}-31T00:00:00`).toDate()
  // const summary = useQuery(Bill).filtered(
  //   'createdAt BETWEEN {$0, $1}',
  //   currentMonth,
  //   nextMonth,
  // )
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
